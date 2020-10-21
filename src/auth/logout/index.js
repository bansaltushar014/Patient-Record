import React, { useEffect, Component } from 'react';


function Logout() {

  useEffect(() => {
    localStorage.setItem('loggedin', '');
    window.location = "http://localhost:3000/";
  }, [])

  return (
    <>
     
    </>
  );
}

export default Logout;
