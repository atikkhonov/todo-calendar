import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IEvent } from "../../models/IEvent";
import { IUser } from "../../models/IUser"

interface EventSlice {
  guests: IUser[];
  events: IEvent[];
  isLoading: boolean;
}

const initialState: EventSlice = {
  guests: [],
  events: [],
  isLoading: false,
}

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setGuest(state, action: PayloadAction<IUser[]>) {
      state.guests = action.payload;
    },
    setEvent(state, action: PayloadAction<IEvent[]>) {
      state.events = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    }
  }
}) 

export const { setGuest, setEvent, setLoading } = eventSlice.actions

export default eventSlice.reducer