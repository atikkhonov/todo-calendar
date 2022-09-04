import { AppDispath } from "..";

import { deleteEvents, setEvent, setGuest, setLoading } from "../slices/EventSlice";

import { IEvent } from "../../models/IEvent";
import UserService from "../../api/UserService";

export const EventActionCreator = {
  fetchGuests: () => async (dispatch: AppDispath) => {
    try {
      const guests = await UserService.getUsers();
      dispatch(setGuest(guests.data))
    } catch (e) {
      console.log(e);
    }
  },
  createEvent: (event: IEvent) => async (dispatch: AppDispath) => {
    try {
      const events = localStorage.getItem("events") || "[]";
      const json = JSON.parse(events) as IEvent[];

      json.push(event)
      dispatch(setEvent(json))
      localStorage.setItem("events", JSON.stringify(json))
    } catch (e) {
      console.log(e);
    }
  },
  fetchEvents: (username: string) => async (dispatch: AppDispath)=> {
    dispatch(setLoading(true))
    try {
      const events = localStorage.getItem("events") || "[]";
      const json = JSON.parse(events) as IEvent[];
      const currentUserEvents = json.filter(e => ( (username === e.author) || (username === e.guest) ))
      
      dispatch(setEvent(currentUserEvents))
      dispatch(setLoading(false))
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false))
    }
  },
  clearCalendar: () => async (dispatch: AppDispath) => {
    dispatch(setLoading(true))
    try {
      localStorage.removeItem("events");

      dispatch(deleteEvents());
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
    }
  }
} 