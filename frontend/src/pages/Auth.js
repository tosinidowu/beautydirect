import {React, useState} from 'react';
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


function Auth(){
    // state variables for email and password
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    // allows navigation between pages
    const navigate = useNavigate();

    // handles sign up
    const signUp = (e) => {
        e.preventDefault();
        // create user with email and password
    }

    // handles sign in
    const signIn = (e) => {
        e.preventDefault();
        // sign in user with email and password
    }

    const signInWithGoogle = (e) => {   
        e.preventDefault();
    }
    

    // handles back and forth between the signup and login pages
    const [move, setMove] = useState(false);

    function handleMove() {
      setMove((move) => !move);
    }
  
    let togglePanel = move ? " right-panel-active" : "";
  
    return (
      <div>
        <div className={`container${togglePanel}`} id="container">
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>Create Account</h1>
              <div className="social-container">
                <button onClick={signInWithGoogle} class="social">
                  Sign up with Google
                </button>
              </div>
              <span>or use your email for registration</span>
              <input
                placeholder="email"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={signUp}>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <div className="social-container">
                <button onClick={signInWithGoogle} class="social">
                  Sign in with Google
                </button>
              </div>
              <span>or use your account</span>
              <input
                placeholder="email"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Link to="/">Forgot your password?</Link>
              <button onClick={signIn}>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button className="ghost" onClick={handleMove} id="signIn">
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Don't have an account? Press the sign up button below</p>
                <button class="ghost" onClick={handleMove} id="signUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Auth;