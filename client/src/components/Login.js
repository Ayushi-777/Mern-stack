import React from 'react'
import loginpic from "../images/login.png";
import {NavLink} from 'react-router-dom';
const Login = () => {
    return (
        <div>
                 <section className="sign-in">
        <div className="container ">
          <div className="signin-content">
           <div className="signin-image">
              <figure>
                <img src = {loginpic} alt="ragistration pic"/>
                <NavLink to="/signup" className="sign-image-link">Create a Account</NavLink>
              </figure>
             
            </div>

            <div className="signin-form">
            <h2 className="form-title">Signin</h2>
              <form class="register-form" id="form-group">

              

                <div className="form-group">
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input type="email" name="email"id="email"autoComplete="off"placeholder="your Email" ></input>
                </div>

                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i class="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name="cpassword"id="cpassword"autoComplete="off"placeholder="Confirm your Password" ></input>
                </div>
                
               <div className="form-group form-button">
                   <input type="submit" name="signin" id="signin" className="form-submit" value="Log In">
                   </input>
               </div>

              </form>
            </div>
          
          
            </div>
        </div>
      </section>
   
    </div>
               
    )
}

export default Login
