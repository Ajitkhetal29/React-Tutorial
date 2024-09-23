import style from "./ButtonContainer.module.css";
function ButtonContainer() {
  const ButtonNames = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={style.buttonsContainer}>
      {ButtonNames.map((buttonName) => (
        <button className={style.button}>{buttonName}</button>
      ))}
    </div>
  );
}

export default ButtonContainer;
