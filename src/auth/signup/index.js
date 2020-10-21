import React from 'react';
import axios from "axios";
import qs from 'qs';

function Signup() {

    const submitForm = (e) => {
        e.preventDefault();
        let firstname = e.target.first_name.value;
        let lastname = e.target.last_name.value;
        let email = e.target.email.value;
        let password = e.target.password.value;

        postReq(firstname, lastname, email, password);

        e.target.first_name.value = "";
        e.target.last_name.value = "";
        e.target.email.value = "";
        e.target.password.value = "";

    }

    const postReq = (firstname, lastname, email, password) => {
        // send a POST request
      const data = { 
          firstname: firstname,
          lastname: lastname,
          email : email,
          password : password
        } ;

        console.log(data);

        const options = {
          headers: {
            'content-type': 'application/x-www-form-urlencoded' 
          }
        };
        axios.post('http://localhost:3001/signup', qs.stringify(data) , options)
        .then((response) => {
          if(response.data){
            localStorage.setItem('loggedin', true);
            alert("Successful!");
            window.location = "http://localhost:3000/asda";
          } else {
            alert(" Failed!");
          }          
        }, (error) => {
          console.log(error);
        });
    }

  return (
    <>
    <div className="row">
    <form className="col s12" onSubmit={submitForm}>
      <div className="row">
        <div className="input-field col s6">
          <input placeholder="Placeholder" id="first_name" type="text" class="validate" />
          <label for="first_name">First Name</label>
        </div>
        <div className="input-field col s6">
          <input id="last_name" type="text" className="validate" />
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate" />
          <label for="email">Email</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password" className="validate" />
          <label for="password">Password</label>
        </div>
      </div>
     
      <input type="submit" className="waves-effect waves-light btn" />
     
    </form>
  </div>
    </>
  );
}

export default Signup;
