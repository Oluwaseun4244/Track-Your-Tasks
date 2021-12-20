//import { ReactPropTypes } from "react"
//import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {

    return (
        <div>
            <button
                onClick={onClick}
                style={{ backgroundColor: color }}
                className="btn">{text}</button>
        </div>
    )
}

Button.defaultProps = {
    color: "teal"
}

export default Button
