import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Login from './auth/login';
import Signup from './auth/signup';
import Logout from './auth/logout';
import Dashboard from './dashboard/dashboard';
import './css/navbar.css';

function App() {

    const [loggedValue, setloggedValue] = useState('');

    useEffect(() => {
        setloggedValue(localStorage.getItem('loggedin'));
        console.log("logged value " + localStorage.getItem('loggedin'));
    }, [])

    return (        
        <>
            <Router>
            <div class="row">
                {!loggedValue &&
                    <div className="col s6 offset-s3 header"> 
                        <Link to='/login'>Login</Link> 
                            &nbsp; &nbsp;
                        <Link to='/signup'>Signup</Link>
                    </div>
                }
                {loggedValue &&
                    <div className="col s6 offset-s3 header">
                    <Link to='/logout'>Logout</Link>
                    </div>
                }
                </div>
                <div>
                    <Switch>
                        <Route exact path='/' component={Login} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/signup' component={Signup} />
                        <Route exact path='/logout' component={Logout} />
                        <Route exact path='/dashboard' component={Dashboard} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </Router>
        </>
    );
}

function NoMatch() {
    return (
        <div className="card-content valign center">
            <br /><br /><br />
            <h4>Invalid URL!</h4>
        </div>
    )
}

export default App;
