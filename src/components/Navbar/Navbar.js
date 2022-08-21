import React, { Fragment, useContext } from 'react';
import NavButton from './NavButton';
import { useNavigate } from "react-router-dom";



const Navbar = (props) => {

  const navigate = useNavigate();


  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("profile");
    navigate("/");

   };

  return (
    <Fragment>
      <div style={{
        backgroundColor: "#b10303",
        position: 'fixed',
        width: '100%',
        zIndex: 9999,
        top: 0,
        left: 0,
        height: '75px',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <h1 style={{
          fontFamily: "monospace",
          fontWeight: 'bold',
          fontSize: '2.5em',
          margin: "0 20px",
          color: "#fff"
        }}>MyMovies</h1>

        
        <div style={{
          margin: '0 20px',
          flexDirection: 'row',
          background: "transparent",
          userSelect: "none",
          alignItems: 'center',
        }}>
          {localStorage.getItem("user") ? (<p style={{fontFamily: "monospace",
          margin: '25px',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '1.5em'}}>
          {JSON.parse(localStorage.getItem("user")).username}</p>) : null}
          <NavButton to="/" label='Home' />
          {localStorage.getItem("user") ? (
              <Fragment>
                <NavButton to="/Profile" label="Profile" />
                <NavButton to="/Review" label="Your Reviews" />
                <NavButton to="/Search" label="Search" />
                <NavButton to="/Watched" label="Watched" />
                <NavButton to="/Favorites" label="Favorites" />
                <NavButton to="/WantToWatch" label="Want To Watch" />
              </Fragment>
            ) : (
              <Fragment>
                <NavButton to="/Login" label="Login" />
                <NavButton to="/Register" label="Register" />
              </Fragment>
          )}
          <button onClick={logout} style={{margin: '0 20px',
          background: '#fff',
          border: "0px",
          borderRadius: "5px",
          padding: "10px 20px",
          textDecoration: 'none',
          fontSize: '1.25em',
          color: "#b10303",
          fontWeight: 600,
          textShadow: '1px 1px #2fbe9b',
          textAlign: 'center',
          whiteSpace: 'nowrap',
          margin: '0 10px',
          opacity: "100%"
          }}>Logout</button>


        </div>
      </div>
      <div style={{height: '75px'}} />
    </Fragment>
  )
}

export default Navbar;