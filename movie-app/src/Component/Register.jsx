import React, { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css'
import { useDispatch, useSelector } from 'react-redux';
import { AuthData, LOGIN } from '../Redux/Action';

export const Register = () => {
 const dispatch=useDispatch()
 const {login}=useSelector((store)=>store)

  const navigate=useNavigate()
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    console.log(isLogin);
    try {
      if (isLogin) {
        const response = await axios.post('http://localhost:8000/login', user, {
          headers: { 'Content-Type': 'application/json' },
        });
        const token = response.data.token; // Access the token from response.data
        if(token){
          sessionStorage.setItem('token',JSON.stringify(token));
          sessionStorage.setItem('email',JSON.stringify(user.email));
          dispatch(LOGIN(true))
          dispatch(AuthData(true))
          navigate("/")
        }else{
          console.log("Invalid Login")
        }
       
      } else {
        const response = await axios.post('http://localhost:8000/signup', user, {
          headers: { 'Content-Type': 'application/json' },
        });
        // console.log(response.data);
        setUser({
          name: '',
          email: '',
          password: '',
        })
        setIsLogin(!isLogin);
      }
    } catch (error) {
      alert("invalid login")
      console.error(error);
    }
  };
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

    return (
        <div>
 <div className="reg-form-container">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input className="reg-input" type="text" placeholder="Username" required />
          )}
          <input className="reg-input" type="email" placeholder="Email" required />
          <input className="reg-input" type="password" placeholder="Password" required />
          <button className="form-button" type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <span>
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <button className="form-button" onClick={toggleForm}>
            {isLogin ? 'Sign up' : 'Login'}
          </button>
        </span>
      </div>
        </div>
       
    );
    
}