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

function App() {
  const { modalState, modalRef, exitModal, showModal } = useModal();
  // const [value, setValue] = useState("");
  const [tweet, setTweet]= useState('');
  const [tweets, setTweets]= useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [themeofAlert, setAlertTheme] = useState("success");
  const modalOkayHandler = () => {
    console.log(tweet);
    setTweets([tweet,...tweets]);
    console.log(tweets);
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
        navbarRightSection={
          <>
            <Button onClick={showModal}>Tweet</Button>
            <AlertPopup
              wrapperRef={modalRef}
              name="example-popup-1"
              visibility={modalState}
              onBackdropClick={modalCancelHandler}
            >
              <AlertPopupHeader>Header</AlertPopupHeader>
              <AlertPopupBody>
                <Input
                  // state={"default"}
                  placeholder={"type your tweet"}
                  //preFilledValue={value}
                  maxCharsLimit={160}
                  onSubmit={(event) => {
                    setTweet(event.target.value);
                  }}
                />
              </AlertPopupBody>
              <AlertPopupFooter>
                <Button onSubmit={modalCancelHandler} variant="link">
                  Cancel
                </Button>
                <div className="DocEntry">
                  <Alert content="Default Alert Text" theme={themeofAlert} />
                  <div className="Example">
                    <Button
                      onSubmit={modalOkayHandler}
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
       {/* {tweets.map((tweet) => (
          <Card tweet = {tweet} />
        ))} */}
        <div className="page">
          <div className="sidebar-container">
            <div>hello</div>
          </div>
          <div className="cards-container">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
    </div>
  );
}

export default App;
