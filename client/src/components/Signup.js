import React from "react";
import signup from "../images/signup.svg";
import {NavLink} from 'react-router-dom';
const Signup = () => {
  return (
    <div>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">

            <div className="sighup-form">
              <h2 className="form-title">Signup</h2>
              <form class="register-form" id="form-group">

                <div className="form-group">
                  <label htmlFor="name">
                    <i class="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input type="text" name="name"id="name"autoComplete="off"placeholder="your Name" ></input>
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input type="email" name="email"id="email"autoComplete="off"placeholder="your Email" ></input>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
                  </label>
                  <input type="text" name="phone"id="phone"autoComplete="off"placeholder="your Phone" minLength="10" maxLength="10" ></input>
                </div>

                <div className="form-group">
                  <label htmlFor="work">
                    <i class="zmdi zmdi-slideshow material-icons-name"></i>
                  </label>
                  <input type="work" name="work"id="work"autoComplete="off"placeholder="your Profession" ></input>
                </div>
                
                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i class="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name="password"id="password"autoComplete="off"placeholder="your Password" ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i class="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name="cpassword"id="cpassword"autoComplete="off"placeholder="Confirm your Password" ></input>
                </div>
                
               <div className="form-group form-button">
                   <input type="submit" name="signup" id="signup" className="form-submit" value="Register">
                   </input>
               </div>

              </form>
            </div>
          
            <div className="signup-image">
              <figure>
                <img src = {signup} alt="ragistration pic"/>
              </figure>
              <NavLink to="/login" className="sign-image-link">I am already register</NavLink>
            </div>
            </div>
        </div>
      </section>
   
    </div>
  );
};

export default Signup;
