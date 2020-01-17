import React from "react";
import PropTypes from "prop-types";

const Log = props => {
  const {
    device,
    fedTime
  } = props;

  return (
    <tr>
      <td>{device}</td>
      <td>{fedTime}</td>
    </tr>
  );
};

Log.propTypes = {
  device: PropTypes.string.isRequired,
  fedTime: PropTypes.string.isRequired
}

export default Log;
