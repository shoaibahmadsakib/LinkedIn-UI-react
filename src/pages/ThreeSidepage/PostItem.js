import React, { Fragment } from "react";
import { Avatar } from "@material-ui/core";
import "./PostItem.css";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";


const PostItem = () => {
  return (
    <Fragment>
      <div className="post-body">
        <Avatar />
        <div className="name-para">
          <h2>sakib</h2>
          <p>hai i ama a digital maarketer</p>
          <span>10.2 pm</span>
        </div>
      </div>
      <div className="post-content">
        <p className="post-paragraph">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. eligendi,
          ducimus, possimus quos id?
        </p>
        <div className="post-image">
          <img
            src="https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg"
            alt=""
          />
          <div className="reaction">
            <IconButton aria-label="delete">
                <ThumbUpAltIcon/>
              <span>like</span>
            </IconButton>
            <IconButton aria-label="delete">
                <ChatBubbleOutlineIcon/>
              <span>comment</span>
            </IconButton>
            <IconButton aria-label="delete">
                <ShareIcon/>
              <span>share</span>
            </IconButton>
            <IconButton aria-label="delete">
                <SendIcon/>
              <span>send</span>
            </IconButton>
          </div>
        </div>
        <div className="post-feed">
          <Avatar />
          <form>
            <input type="text" placeholder="comment here" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default PostItem;
