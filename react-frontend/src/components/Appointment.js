import React from "react";
import PropTypes from "prop-types";

const Appointment = props => {
  const {
    device,
    feedTime
  } = props;

  return (
    <tr>
      <td>{device}</td>
      <td>{feedTime}</td>
    </tr>
  );
};

Appointment.propTypes = {
  device: PropTypes.string.isRequired,
  feedTime: PropTypes.string.isRequired
}

export default Appointment;
