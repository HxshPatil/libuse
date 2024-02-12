import React from "react";
import "./profileCard.css";

const Profile = (
    // { tweet , timestamp }
    ) => {

  return (
    <div className="profile-card-container">
      <div className="image-wrapper">
        <div className="profile-img-container">
          <img className="profile-img" src="https://cdn-icons-png.flaticon.com/128/1326/1326377.png" alt="profile"></img>
        </div>
      </div>
        
        <div className="profile-banner-container">
          RATATOUILLE
        </div>
        <div className="details-container">
          <div className="name-details">
            <div><b>Harshvardhan</b></div>
            <div className="username">@harsh</div>
          </div>
          <div className="profile-details">
            <div className="detail-wrapper">
              <div className="detail-heading">
                Tweets
              </div>
              <div className="detail-content">
                <b>25</b>
              </div>
            </div>
            <div className="detail-wrapper">
              <div className="detail-heading">
                Following
              </div>
              <div className="detail-content">
                <b>809</b>
              </div>
            </div>
            <div className="detail-wrapper">
              <div className="detail-heading">
                Followers
              </div>
              <div className="detail-content">
                <b>225</b>
              </div>
            </div>
            
          </div>
        </div>
    </div>
  );
};

export default Profile;
