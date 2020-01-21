import React from "react";
import PropTypes from "prop-types";
import Appointment from "./Appointment";
import Table from "react-bootstrap/Table";

const AppointmentCollection = props => {
  const appointmentCollection = props.appointments.map((app, i) => {
    return (
      <Appointment
        key={i}
        {...app}
      />
    );
  });

  return (
    <div className="background">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Device</th>
            <th>FeedTime</th>
          </tr>
        </thead>
        <tbody>{appointmentCollection}</tbody>
      </Table>
    </div>
  );
};

AppointmentCollection.propTypes = {
  appointments: PropTypes.array
}

export default AppointmentCollection;