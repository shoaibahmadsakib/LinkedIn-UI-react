import React from "react";
import "./ProfileMain.css";
const ProfileMain = ({ name, describtion, profileView, postView }) => {
  return (
    <div className="Profile-style">
      <h1 className="profileHeader">{name}</h1>
      <p className="describtion">{describtion}</p>
      <hr />
      <p className="otherInfo">
        {profileView}
        <span className="span-color">20</span>
        <br />
        {postView}
        <span className="span-color">10</span>
      </p>
    </div>
  );
};

export default ProfileMain;
