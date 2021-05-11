import React, { Fragment } from "react";
import Feed from "./ThreeSidepage/Feed";
import Notification from "./ThreeSidepage/Notification";
import Profile from "./ThreeSidepage/Profile";
import "./Homepage.css";
import Header from "./ThreeSidepage/Header";

const Homepage = () => {
  return (
    <Fragment>
      <div className="header-style">
          <Header/>
      </div>
      <div className="Homepage-style">
        <Profile />
        <Feed />
        <Notification />
      </div>
    </Fragment>
  );
};

export default Homepage;
