import React, { useState } from "react";
import "./card.css";

const Card = (
    { tweet , timestamp }
    ) => {

  return (
    <div className="card-container">
        <div className="img-container">
            <img src="https://cdn-icons-png.flaticon.com/128/1326/1326377.png" alt="profile"></img>
        </div>
        <div className="content-container">
            <div className="heading">
                <div className="name">
                    <b>Harshvardhan</b>
                </div>
                <div className="userName">
                    @harsh
                </div>
                <div className="date">
                    {/* 11/2/24 */}
                    {timestamp}
                </div>
            </div>

            <div className="tweet">
                {tweet}
                 {/* Nullam mattis nulla arcu, vel aliquet metus varius eget. Nullam luctus malesuada eros ac tempus. */}
            </div>
        </div>
    </div>
  );
};

export default Card;
