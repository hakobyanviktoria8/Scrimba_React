import React from "react";
import PropTypes from 'prop-types';

const Card = (props) => {
    const style = {
        width: 100,
        height: 100,
        background: props.background,
    };
    return (
        <div style={style}> </div>
    );
};
Card.prototype = {
    background: PropTypes.oneOf([ "blue", "red"]),
    height: PropTypes.number.isRequired,
    width: PropTypes.number
};
Card.defaultProps = {
    background: "black"
};
export default Card