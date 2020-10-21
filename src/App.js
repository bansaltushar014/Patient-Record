import React, { useEffect, useState}  from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Dashboard from './dashboard';

function App(props) {

  const [loggedValue, setloggedValue] = useState('');

    useEffect(() => { 
        setloggedValue(localStorage.getItem('loggedin'));
        
    }, [])

  return (
    <>
    <div className="App">
      {props.children}
    </div>

    {loggedValue &&
      <Dashboard />
    }
    </>
  );
}

export default App;
