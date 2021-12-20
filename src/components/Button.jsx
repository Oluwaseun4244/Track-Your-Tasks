//import { ReactPropTypes } from "react"
//import PropTypes from 'prop-types'

const Button = ({ color, text, press }) => {
  return (
    <div>
      <button
        onClick={press}
        style={{ backgroundColor: color }}
        className="btn"
      >
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  color: "teal",
};

export default Button;
