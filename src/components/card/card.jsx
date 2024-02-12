import React, { useState } from "react";
import "./card.css";

const Card = (
    // { tweet }
    ) => {

  return (
    <div className="card-container">
        <div className="img-container">
            <img src="https://cdn-icons-png.flaticon.com/128/1326/1326377.png" alt="profile"></img>
        </div>
        <div className="content-container">
            <div className="name">
                Harshvardhan
            </div>
            <div className="tweet">
                {/* {tweet} */}
            </div>
        </div>
    </div>
  );
};

export default Card;
