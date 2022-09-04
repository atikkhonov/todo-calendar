import { Button, DatePicker, Form, Input, Row, Select } from 'antd'
import { Moment } from 'moment';
import React from 'react'
import useTypedSelector from '../../../hooks/useTypedSelector';
import { IEvent } from '../../../models/IEvent';
import { IUser } from '../../../models/IUser'
import { formatDate } from '../../../utils/date';
import { rules } from '../../../utils/rules' 

interface EventFormProps {
  guests: IUser[];
  submit: (event: IEvent) => void;
}

const EventForm: React.FC<EventFormProps> = ({ guests, submit }) => {
  const user = useTypedSelector(state => state.authReducer.user)
  
  const [event, setEvent] = React.useState<IEvent>({
    author: '',
    date: '',
    description: '',
    guest: ''
  } as IEvent);
  
  const onSelectDate = (date: Moment | null) => {
    if (date) {
      setEvent({ ...event, date: (formatDate(date.toDate())) })
    }
  };

  const submitForm = () => {
    submit({...event, author: user.username});
  }

  
  return (
    <Form onFinish={submitForm}>
      <Row justify='end'>
        <Form.Item
          label="Event description"
          name="description"
          rules={[rules.required()]}
        >
          <Input 
            value={event.description}
            onChange={e => setEvent({ ...event, description: e.target.value})}
            style={{ width: 210 }} 
          /> 
        </Form.Item>
        <Form.Item
          label="Event date"
          name="date"
          rules={[rules.required(), rules.isDateAfter("Invalid date")]}
        >
          <DatePicker 
            onChange={(date) => onSelectDate(date)}
            style={{ width: 210 }}
          />
        </Form.Item>
        <Form.Item
          label="Event guest"
          name="guest"
          rules={[rules.required()]}
        >
          <Select 
            style={{ width: 210 }} 
            onChange={(guest: string) => setEvent({ ...event, guest})}
          >
            {
              guests.map(guest => {
                return <Select.Option key={guest.username} value={guest.username}>{guest.username}</Select.Option>
              })
            }
          </Select>
        </Form.Item>
      </Row>
      <Row justify='end'>
        <Form.Item>
          <Button
            htmlType="submit" 
            className="login-form-button" 
            type="primary" 
            // onSubmit={onSubmitHandler}
            // loading={isLoading}
            style={{
              background: "var(--main-color)",
              border: "none",
            }}
          >
            Create
          </Button>
        </Form.Item>  
      </Row>
    </Form>
  )
}

export default EventForm