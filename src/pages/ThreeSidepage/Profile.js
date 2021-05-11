import { Avatar } from "@material-ui/core";
import React from "react";
import ProfileData from "../../Components/Data/ProfileData";
import ProfileMain from "../../Components/MainProfile/ProfileMain";
import '../Homepage.css'

const Profile = () => {
  return (
    <div className="layout-style">
      <div className="image"></div>
      <div className="avator">
        <Avatar style={{ height: "60px", width: "60px" }} />
      </div>
      <div className="profile-content">
        {ProfileData.map((sakibInfo) => (
          <ProfileMain
            name={sakibInfo.proName}
            describtion={sakibInfo.describtion}
            profileView={sakibInfo.view}
            postView={sakibInfo.views}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
