import React from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';


export default function App () {

    const responseFacebook = (response) => {
      console.log(response);
    }

    const responseGoogle = (response) => {
      console.log(response);
    }

    return (
      <div className="App">

      <FacebookLogin
        appId="670629370188855"
        fields="name,email,password"
        callback={responseFacebook}
      />
      <br />
      <br />


      <GoogleLogin
        clientId="984942247473-htijcg924kmrc1o98s9foj6hpp7pl8u8.apps.googleusercontent.com"
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />

      </div>
    );
  }
