import React, { Fragment, useContext } from 'react';
import NavButton from './NavButton';

const Navbar = (props) => {

  return (
    <Fragment>
      <div style={{
        backgroundColor: "grey",
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
          margin: "0 20px"
        }}>MyMovies</h1>

        
        <div style={{
          margin: '0 20px',
          flexDirection: 'row',
          background: "transparent",
          userSelect: "none",
          alignItems: 'center',
        }}>
          
          <NavButton to="/" label='Home' />
          {localStorage.getItem("user") ? (
              <Fragment>
                <NavButton to="/Profile" label="Profile" />
                <NavButton to="/Search" label="Search" />
                <NavButton to="/Watched" label="Watched" />
                <NavButton to="/Favorites" label="Favorites" />
                <NavButton to="/WantToWatch" label="Want To Watch" />
                <NavButton to="/profile" label="Profile" />
                <NavButton to="/Review" label="Write Reviews" />
              </Fragment>
            ) : (
              <Fragment>
                <NavButton to="/Login" label="Login" />
                <NavButton to="/Register" label="Register" />
              </Fragment>
          )}
          {localStorage.getItem("user") ? (<p style={{fontFamily: "monospace",
          fontWeight: 'bold',
          fontSize: '1.5em'}}>
          Hi {JSON.parse(localStorage.getItem("user")).username}</p>) : null}
        </div>
      </div>
      <div style={{height: '75px'}} />
    </Fragment>
  )
}

export default Navbar;