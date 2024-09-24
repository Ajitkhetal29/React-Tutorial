import style from './Display.module.css'
function Display({displayValue}){
    return <input type="text" className={style.display}  value={displayValue} />

}

export default Display;