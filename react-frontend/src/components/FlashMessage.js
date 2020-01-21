import React from 'react';
import PropTypes from 'prop-types';

const Message = ({message, style, onTimeoutCallback}) => {
  setTimeout(function(){ onTimeoutCallback() }, 6000)

  return (
    <div className={style}>
      {message}
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
  style: PropTypes.string,
  onTimeoutCallback: PropTypes.func.isRequired,
}

export default Message;