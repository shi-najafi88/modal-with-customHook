import React from "react";
import './button.css'

const Button = ({name , Clicked})=> {

    const clickHandler = ()=> {
        Clicked()
    }

    return(
        <button onClick={clickHandler}>{name}</button>
    )
}

export default Button