import React, { useContext } from 'react';
import './Login.css'
import logo from '../../creative-agency-main/images/logos/logo.png'
import logoG from '../../creative-agency-main/images/logos/googleLogo.png'
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebaseConfig';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { userContext } from '../../App';

firebase.initializeApp(firebaseConfig)

const Login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const {user} = useContext(userContext);
    const [loginUser, setLoginUser] = user;

    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            const user = result.user;
            const {displayName, email, photoURL} = user;
            const newUser = {...loginUser}
            newUser.name = displayName
            newUser.email = email
            newUser.photo = photoURL
            newUser.isSignIn = true
            setLoginUser(newUser)
            history.replace(from);
          }).catch(function(error) {
            const newUser = {...loginUser}
            newUser.error = error.message
            newUser.isSignIn = false
            setLoginUser(newUser)
          });
    }

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    return (
        <div>
            <div style={{textAlign: "center", marginTop:"20px"}}>
                <Link to='/'> 
                    <img src={logo} alt="" height="80"/>
                </Link>
            </div>

            <div className="login-area">
                <div className="login-field">
                    <h2>Login With</h2>
                        <div onClick={handleGoogleSignIn} className="loginG">
                            <img src={logoG} alt="" height="35"/>
                            <span>Continue With Google </span>
                        </div>
                <small style={{textAlign:"center", display: 'block', margin:"5px"}}>Don't have an account?  
                    <a href="#"> Create an account</a>
                </small>
                </div>
            </div>
        </div>
    );
};

export default Login;