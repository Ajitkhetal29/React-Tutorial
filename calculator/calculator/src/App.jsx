import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./App.module.css";
import ButtonContainer from "./components/ButtonsContainer";
import Display from "./components/Display"
function App() {
  return (
    <>
      <div className={style.calculator}>
        <Display></Display>
        <ButtonContainer></ButtonContainer>
      </div>
    </>
  );
}

export default App;
