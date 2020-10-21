import React from 'react';
import axios from "axios";
import qs from 'qs';


function Login() {

    const submitForm = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;

        getData(email, password);

        e.target.email.value = "";
        e.target.password.value = "";

    }

    const getData = (email, password) => {
           
        // send a POST request
        const data = { 
          email : email,
          password : password
        } ;
        const options = {
          headers: {
            'content-type': 'application/x-www-form-urlencoded' 
          }
        };
        axios.post('http://localhost:3001/signin', qs.stringify(data) , options)
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
       <div class="row">
    <form class="col s12" onSubmit={submitForm}>
    
    <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate" />
          <label for="email">Email</label>
        </div>
      </div>
   
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate" />
          <label for="password">Password</label>
        </div>
      </div>
      
      <input type="submit" class="waves-effect waves-light btn" />
   
    </form>
  </div>
        

    </>
  );
}

export default Login;
