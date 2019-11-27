import React from "react";
import PropTypes from "prop-types";

function Protocol({ author, date, text }) {
  return (
    <div>
      {date}: {author}
      <p>{text}</p>
    </div>
  );
}

Protocol.propTypes = {
  author: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string
};
export default Protocol;
