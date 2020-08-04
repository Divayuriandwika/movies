import React from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import {loginGoogleUser} from '../redux/actions/usersAction'
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';


export default function App () {

  const dispatch = useDispatch()
  const history = useHistory();

    const responseFacebook = (response) => {
      console.log(response);
    }

    const responseGoogleSuccess = (response) => {
      console.log(response)
      dispatch(loginGoogleUser({googleid:response.googleId},history))

    }

    const responseGoogleFailure = (response )=>{
      console.log(response)
    }

    return (
      <div className="App">

      <FacebookLogin
        appId="614073379543633"
        fields="name,email,password"
        callback={responseFacebook}
      />
      <br />
      <br />


      <GoogleLogin
        clientId="984942247473-htijcg924kmrc1o98s9foj6hpp7pl8u8.apps.googleusercontent.com"
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogleSuccess}
        onFailure={responseGoogleFailure}
      />

      </div>
    );
  }
