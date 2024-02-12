import React, { useState } from "react";
// import "./card.css";

const Card = (
    //  { tweet }
    ) => {
        const [value, setValue] = useState("");
//   const [selectedColor, setSelectedColor] = useState(colors[0]);

//   const handleColorChange = (color) => {
//     setSelectedColor(color);
//   };

  return (
    <div className="card-container">
        <div className="img-container">
            <img src="https://cdn-icons-png.flaticon.com/128/1326/1326377.png" alt="profile"></img>
        </div>
        <div className="content-conatiner">
            <div>
                {/* {tweet.value} */}
                HARSH
                </div>
        </div>
    </div>
  );
};

export default Card;
