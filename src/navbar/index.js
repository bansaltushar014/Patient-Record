import React, { useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import Login from '../login';
import Signup from '../signup';
import Logout from '../logout';

function App() {

    const [loggedValue, setloggedValue] = useState('');

    useEffect(() => { 
        setloggedValue(localStorage.getItem('loggedin'));
        console.log("logged value " + localStorage.getItem('loggedin'));
    }, [])

  return (
    <>
        <Router>
         { !loggedValue &&
         <> 
         <Link to='/login'>Login</Link>
         <Link to='/signup'>Signup</Link>
         </>
         }  
         { loggedValue &&
             <Link to='/logout'>Logout</Link>
         }
               <div>
                   <Switch>
                   {/* <Route exact path='/'  component={App} /> */}
                   <Route exact path='/login'  component={Login} />
                   <Route exact path='/signup'  component={Signup} />
                   <Route exact path='/logout'  component={Logout} />
                   <Route component={NoMatch}/>
                   </Switch>
               </div> 
            </Router>
    </>
  );
}

function NoMatch(){
    return(
        <div>
            NoMatch
        </div>
    )
 }

export default App;
