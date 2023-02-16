import React from "react";
import UseEnterEscButtonsHook from "../../custom Hook/useEnterEscButtonsHook";
import Button from "../button/Button";
import "./modal.css"

const Modal = ({seter}) => {
    
    const AgreeHandler =() => {
            seter(false)
    }

    const DissAgreeHandler =() => {      
            seter(false)
    }

    UseEnterEscButtonsHook (AgreeHandler,DissAgreeHandler)

    return(
        <div className="overlay">
            <div className="modalContainer">
                <p>are you sure delet?</p>
                <div className="wrapperBtn">
                    <Button name={"yes"} />
                    <Button name={"no"} />
                </div>
            </div>
            
        </div>      
    )    
}
export default Modal