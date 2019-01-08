import React from 'react';
import { Button, Checkbox, Form, Input, Radio, Select, TextArea} from 'semantic-ui-react';
import './ItemForm.css';

const options = [
  { key: 'h', text: 'Hotel', value: 'hotel' },
  { key: 'c', text: 'Car Rental', value: 'car' },
  { key: 'a', text: 'Activity', value: 'activity' },
]
class ItemForm extends React.Component {
  state = {}

handleChange = (e, { value }) => this.setState({ value })
  render(){
    const { value } = this.state
    return(
      <div>
        <h1 className="headline">Add An Item</h1>
        <div className="formHolder">
        <Form style={{fontSize:'19px'}}>
        <Form.Group widths='equal'>
          <Form.Field control={Input} label='Item Name' placeholder='Item Name' />
          <Form.Field control={Input} label='Date(s)' placeholder='Date(s)' />
          <Form.Field control={Select} label='Category' options={options} placeholder='Category' />
        </Form.Group>
        <Form.Group inline>
          <Form.Field control={Input} label='Price' placeholder='Price' />
          <Form.Field control={Input} label='Location' placeholder='Location' />
          <Form.Field style={{fontWeight: 'bold', fontSize:'18px'}} control={Checkbox} label='Paid?' />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field control={Input} label='Booked Through' placeholder='Booked Through' />
          <Form.Field control={Input} label='Confirmation #' placeholder='Confirmation #' />
        </Form.Group>
        <Form.Field control={TextArea} label='Notes' placeholder='Notes' />
      </Form>
        </div>
      </div>

    )

  }
}

export default ItemForm;
