import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';


const NavButton = (props) => {
  const [hover, setHover] = useState(false);
  return (
    <NavLink 
      to={props.to} 
      style={{
        background: hover ? "#fff" : "",
        padding: '10px 20px',
        borderRadius: '5px',
        textDecoration: 'none',
        fontSize: '1.25em',
        color: hover ? "#b10303" : "#fff",
        fontWeight: 600,
        textShadow: '1px 1px #ccc',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        margin: '0 10px',
        opacity: hover ? "100%" : "100%"
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {props.label}
    </NavLink>
  )
}
NavButton.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}
export default NavButton;








