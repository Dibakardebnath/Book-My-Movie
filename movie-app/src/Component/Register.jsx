import { useState } from "react";
import './Register.css'

export const Register=()=>{

        const [isLogin, setIsLogin] = useState(true);
      
        const toggleForm = () => {
          setIsLogin(!isLogin);
        };
    return (
        <div>
 <div className="reg-form-container">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form>
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