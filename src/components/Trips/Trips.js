import React from 'react';
import './Trips.css';

const trips = () => {
  return(
    <div>
      <h1 className="headline">Trips</h1>
      <div className="button_holder">
        <button className="button">
          Add A Trip
        </button>
        <button className="button">
          View All Trips
        </button>

      </div>
    </div>
  )
}



export default trips;
