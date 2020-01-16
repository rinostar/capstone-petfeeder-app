import React from "react";
import PropTypes from "prop-types";
import Log from "./Log";
import Table from "react-bootstrap/Table";

const LogCollection = props => {
  const logCollection = props.logs.map((log, i) => {
    return (
      <Log
        key={i}
        {...log}
      />
    );
  });

  return (
    <div className="background">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Device</th>
            <th>FedTime</th>
          </tr>
        </thead>
        <tbody>{logCollection}</tbody>
      </Table>
    </div>
  );
};

LogCollection.propTypes = {
  logs: PropTypes.array
}

export default LogCollection;