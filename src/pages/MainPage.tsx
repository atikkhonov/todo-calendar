// Libraries
import React from 'react'
// Components
import EventCalendar from '../components/elements/EventCalendar/EventCalendar'
import EventForm from '../components/UI/EventForm/EventForm'
// Redux
import useTypedDispatch from '../hooks/useTypedDispatch'
import useTypedSelector from '../hooks/useTypedSelector'
import { EventActionCreator } from '../redux/actionCreators/EventActionCreator'
// antd
import { Button, Layout, Modal, Row } from 'antd'
// models
import { IEvent } from '../models/IEvent'

const MainPage: React.FC = () => {
  const dispatch = useTypedDispatch()

  const { guests, events } = useTypedSelector(state => state.eventReducer)
  const { user } = useTypedSelector(state => state.authReducer)

  const [modalVisible, setModalVisible] = React.useState<boolean>(false)
  
  React.useEffect(() => {
    dispatch(EventActionCreator.fetchGuests())
    dispatch(EventActionCreator.fetchEvents(user.username))
  }, [])
  
  const onClickAddEventButton = () => {
    setModalVisible(true)
  }

  const onClickDeleteEvents = () => {
    dispatch(EventActionCreator.clearCalendar())
  }
  
  const handleCancel = () => {
    setModalVisible(false)
  }
  
  const onSubmitAddEvent = (event: IEvent) => {
    setModalVisible(false)
    dispatch(EventActionCreator.createEvent(event))
  }
  
  return (
    <>
      <Layout style={{ padding: ".5rem 0" }}>
        <Row justify='end'>
          <Button 
            onClick={onClickAddEventButton}
            type="default"
            style={{
              background: "var(--main-color)",
              border: "none",
            }}
          >
            Add an event
          </Button>
          <Button
            onClick={onClickDeleteEvents}
            type="default"
            style={{
              background: "var(--main-color)",
              border: "none",
              margin: "0 1rem"
            }}
          >
            Clear calendar
          </Button>
        </Row>
        <EventCalendar events={events}/>
      </Layout>
      <Modal
        visible={modalVisible}
        title={"Add an event"}
        onCancel={handleCancel}
        footer={null}
      >
        <EventForm 
          guests={guests}
          submit={onSubmitAddEvent}
        />
      </Modal>
    </>
    )
}

export default MainPage