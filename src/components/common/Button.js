import React from 'react';
import PropTypes from 'prop-types';
// fontawesome spinner

const Button = (props) => {
  return (
    <button
      type={props.type || "submit"}
      style={{...styles.button, ...props.style}}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.disabled ? (
        <p>Loading...</p> 
      ) : (
        props.children
      )}
    </button>
  )
}

const styles = {
  button: {
    cursor: 'pointer',
    alignSelf: 'center',
    backgroundColor: '#b10303',
    color: '#fff',
    padding: 15,
    border: '0',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    marginTop: 25,
    width: "100%",
    maxWidth: "250px",
    borderRadius: '5px',
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "sans-serif"
  }
}

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}

export default Button;