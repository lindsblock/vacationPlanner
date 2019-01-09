import React from 'react';
import './TripForm.css';
import { Form, Divider } from 'semantic-ui-react';
// import axios from '../../axios-trips';


class TripForm extends React.Component {
  state = {
    trip: [{
      name: '',
      date: '',
    }],
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let trip = {...this.state}
    this.props.submit(trip)
    this.setState({...this.state})
  }

// handleSubmit = (e) => {
//   e.preventDefault();
//   const trip = {
//     trip: this.state.trip
//   }
//   axios.post('/trips.json', trip)
//     .then(response => console.log(response))
//     .catch(error => console.log(error));
//   }

handleChange = (e) => {
  const { name, value } = e.target;
  this.setState({ [name]: value })
}


  render(){
    const { name, date } = this.state
    return(
      <div>
        <div className="formHolder">
          <Form onSubmit={this.handleSubmit} style={{fontSize:'30px'}}>
            <h1 style={{fontSize:'35px'}}>Add A New Trip</h1>
            <Form.Group>
              <Form.Input
                name="name"
                value={name}
                lable="Trip Name"
                onChange={this.onChange}
                placeholder="Name"
              />
              <Form.Input
                name="date"
                value={date}
                lable="Trip Date"
                onChange={this.onChange}
                placeholder="Date"
              />
            </Form.Group>
            <Divider />
            {/* <Form.Field >
              <label>Trip Name:</label>
              <br />
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                placeholder='Trip Name'
              />
            </Form.Field>
            <Form.Field>
              <label>Trip Date:</label>
              <br />
              <input
                type="text"
                name="date"
                value={date}
                onChange={this.handleChange}
                placeholder='Trip Date'
              />
            </Form.Field> */}
            <button className="button">Add Trip</button>
          </Form>
        </div>
      </div>

    )

  }
}

export default TripForm;
