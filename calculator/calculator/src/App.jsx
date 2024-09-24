import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./App.module.css";
import ButtonContainer from "./components/ButtonsContainer";
import Display from "./components/Display";
import { useState } from "react";
function App() {
  let [calVal, setcalval] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "c") {
      setcalval("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setcalval(result)
    } else {
      const newDisplayValue = calVal + buttonText;
      setcalval(newDisplayValue);
    }
  };

  return (
    <>
      <div className={style.calculator}>
        <Display displayValue={calVal}></Display>
        <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
      </div>
    </>
  );
}

export default App;
