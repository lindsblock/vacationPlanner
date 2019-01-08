import React from 'react';
import './Trips.css';
import TripForm from '../TripForm/TripForm';
import { Container } from 'semantic-ui-react';

class Trips extends React.Component {
  state = { showForm: false }

  showForm = () => {
    return <TripForm />
  }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm}
    })
  }

  showTrips = () => {
    return(
      <div>
        <h1>Map over trips here</h1>
      </div>
    )
  }

  render() {
    const { showForm } = this.state;
    return(
      <div>
        <h1>Trips</h1>
        <Container textAlign="center">
          <button className="button" onClick={this.toggleForm}>
            { showForm ? 'Cancel' : 'Add A Trip'}
          </button>
          { showForm ? this.showForm() : this.showTrips() }
        </Container>
      </div>
    )
  }
}



export default Trips;
