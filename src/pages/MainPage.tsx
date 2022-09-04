import { Button, Layout, Modal, Row } from 'antd'
import React from 'react'
import EventCalendar from '../components/elements/EventCalendar/EventCalendar'
import EventForm from '../components/UI/EventForm/EventForm'
import useTypedDispatch from '../hooks/useTypedDispatch'
import useTypedSelector from '../hooks/useTypedSelector'
import { IEvent } from '../models/IEvent'
import { EventActionCreator } from '../redux/actionCreators/EventActionCreator'

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
  
  const handleCancel = () => {
    setModalVisible(false)
  }
  
  const onSubmitAddEvent = (event: IEvent) => {
    setModalVisible(false)
    dispatch(EventActionCreator.createEvent(event))
  }
  
  return (
    <>
      <Layout>
        <EventCalendar events={events}/>
        <Row justify='center'>
          <Button 
            onClick={onClickAddEventButton}
            type="primary"
            style={{
              background: "var(--main-color)",
              border: "none",
            }}
          >Add an event</Button>
        </Row>
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