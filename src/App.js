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

function App() {
  const { modalState, modalRef, exitModal, showModal } = useModal();
  const [value, setValue] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [themeofAlert, setAlertTheme] = useState("warning");
  const modalOkayHandler = () => {
    console.log(value);
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
                  placeholder={"Lorem is ipsum..."}
                  preFilledValue={value}
                  maxCharsLimit={160}
                  onChange={(event) => {
                    setValue(event.target.value);
                  }}
                />
              </AlertPopupBody>
              <AlertPopupFooter>
                <Button onClick={modalCancelHandler} variant="link">
                  Cancel
                </Button>
                <div className="DocEntry">
                  <Alert content="Limit text to 160 characters" theme={themeofAlert} />
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
    </div>
  );
}

export default App;
