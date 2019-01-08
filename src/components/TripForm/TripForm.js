import React from 'react';
import './TripForm.css';
import { Form } from 'semantic-ui-react';


class TripForm extends React.Component {
  render(){
    return(
      <div>
        <h1 className="headline">Add A New Trip</h1>
        <div className="formHolder">
          <Form style={{fontSize:'30px'}}>
            <Form.Field>
              <label>Trip Name:</label>
              <br />
              <input placeholder='Trip Name' />
            </Form.Field>
            <Form.Field>
              <label>Trip Date:</label>
              <br />
              <input placeholder='Trip Date' />
            </Form.Field>
            <button className="button">Add Trip</button>
          </Form>
        </div>
      </div>

    )

  }
}

export default TripForm;
