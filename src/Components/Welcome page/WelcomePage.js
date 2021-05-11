import React, { Fragment } from "react";
import LinkedIn from "../../image/linkedin.png";
import Button from "@material-ui/core/Button";
import "./SigninAndSignUp.css";
import { Link } from 'react-router-dom'

const WelcomePage = () => {
  return (
    <Fragment>
      <div className="welcome-header">
        <div className="linkedin-logo">
          <img src={LinkedIn} alt="linkedin" height="35px" width="120px" />
        </div>
        <div className="signin-signup">
          <Button>
            <Link to="/signup">join now</Link>
          </Button>

          <Button variant="outlined" color="primary">
            <Link to="/signin">sign in</Link>
          </Button>
        </div>
      </div>
      <div className="welcome-text">
        <h1>Welcome to your professional community</h1>
        
          <img
            src="https://static-exp1.licdn.com/sc/h/d58zfe6h3ycgq5l1ccjpkrtdn"
            alt=""
          />
        
      </div>
    </Fragment>
  );
};

export default WelcomePage;
