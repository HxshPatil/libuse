import "./App.css";
import React, { useState } from "react";
import {
  Navbar,
  Alert,
  Input,
  Button,
  AlertPopup,
  AlertPopupBody,
  AlertPopupFooter,
  AlertPopupHeader,
  useModal,
} from "@attrybtech/attryb-ui";

import Card from "./components/card/card";
import Profile from "./components/profileCard/profileCard";

function App() {
  const { modalState, modalRef, exitModal, showModal } = useModal();
  // const [value, setValue] = useState("");
  const month=["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
  const [tweet, setTweet]= useState('');
  const [timestamp, setTimestamp]= useState('');
  const [tweets, setTweets]= useState(["Hi!", "default Tweets"]);
  const [timestamps, setTimestamps]= useState(["Feb 12","Feb 12"]);
  const [showAlert, setShowAlert] = useState(false);
  const [themeofAlert, setAlertTheme] = useState("success");
  const modalOkayHandler = () => {
  const today = new Date();
  const mon = today.getMonth();
  const year = today.getFullYear();
  const date = today.getDate();
  setTimestamp(`${month[mon]} ${date}`)
    console.log(tweet);
    setTweets([tweet,...tweets]);
    setTimestamps([`${month[mon]} ${date}`,...timestamps]);
    setShowAlert(true);
    setAlertTheme("success");
    exitModal();
  };

  const modalCancelHandler = () => {
    console.log("Cancelled");
    exitModal();
  };

  return (
    <div className="App">
      <Navbar
       navbarLeftSection={
        <>
        <div className="twitter-logo-b"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/292px-Logo_of_Twitter.svg.png' alt=''></img></div>
        <div className='left-navbar'>
          
          <ul>
            <li>
              <a href="#"> Home </a>
            </li>
            <li>
              <a href="#"> Moments </a>
            </li>
            <li>
              <a href="#"> Notifications </a>
            </li>
            <li> <a href="#"> Messages </a>
            <div className="twitter-logo-a"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/292px-Logo_of_Twitter.svg.png' alt=''></img></div>
            </li>
          </ul>
        </div>
        </>
      }
        navbarRightSection={
          <>
            <Button 
            // className="tweet-btn"
            onClick={()=>{showModal();setTweet("")}}
            >
              Tweet
            </Button>
            <AlertPopup
              wrapperRef={modalRef}
              name="example-popup-1"
              visibility={modalState}
              onBackdropClick={modalCancelHandler}
            >
              <AlertPopupHeader>Tweet</AlertPopupHeader>
              <AlertPopupBody>
                <Input
                  // state={"default"}
                  placeholder={"type your tweet"}
                  preFilledValue={tweet}
                  maxCharsLimit={160}
                  onChange={(event) => {
                    setTweet(event.target.value);
                    // setTimestamp(event.target.value);
                  }}
                />
              </AlertPopupBody>
              <AlertPopupFooter>
                <Button onClick={modalCancelHandler} variant="link">
                  Cancel
                </Button>
                <div className="DocEntry">
{/* { showAlert &&                  <Alert content="Default Alert Text" theme={themeofAlert} />
}           */}
        <div className="Example">
                    <Button 
                      onClick={modalOkayHandler}
                      colorScheme="primary"
                    >
                      Okay
                    </Button>
                  </div>
                </div>
              </AlertPopupFooter>
            </AlertPopup>
          </>
        }
      />
        <div className="page">
          <div className="sidebar-container">
            <Profile/>
          </div>
          <div className="cards-container">
            {tweets.map((tweet, timestamps) => (
              <Card tweet = {tweet} timestamp = {timestamp} />
            ))}
            {/* <Card/>
            <Card/> */}
          </div>
        </div>
    </div>
  );
}

export default App;
