import React from 'react';
import './TripView.css';
import ItemForm from '../ItemForm/ItemForm';
import { Table } from 'semantic-ui-react';

const tripView = () => {
  return(
    <div>
      <h1 className="headline">My Trip To...</h1>
      <div className="button_holder">
        <button className="button">
          <a href="additem">Add A Trip Item</a>
        </button>
      </div>
      <div>
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Category</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell>Location</Table.HeaderCell>
              <Table.HeaderCell>Paid</Table.HeaderCell>
              <Table.HeaderCell>Booked Through</Table.HeaderCell>
              <Table.HeaderCell>Confirmation #</Table.HeaderCell>
              <Table.HeaderCell>Notes</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
        </Table>
      </div>
    </div>
  )
}



export default tripView;
