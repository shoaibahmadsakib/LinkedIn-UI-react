import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import "./FeedBar.css";

const Notification = (props) => {
  const [state, setState] = useState([
    {
      name: "sakib",
      para: "Lorem ipsum tis pariatur vero architecto fugiat porro iusto.",
      follow: "+Follow",
    },
    {
      name: "sakib",
      para: "Lorem ipsum tis pariatur vero architecto fugiat porro iusto.",
      follow: "+Follow",
    },
    {
      name: "hasan",
      para: "Lorem ipsum tis pariatur vero architecto fugiat porro iusto.",
      follow: "+Follow",
    },
  ]);

  return (
    <div className="layout-style">
      <h2 className="add-cart">Add to your feed</h2>
      {state.map((item) => (
        <div className="addto-feed">
          <Avatar style={{ height: "50px", width: "50px" }} />
          <div className="notifiaction-item">
            <h1>{item.name}</h1>
            <span>{item.para}</span>
            <Button variant="outlined">{item.follow}</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notification;
