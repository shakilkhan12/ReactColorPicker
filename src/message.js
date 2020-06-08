import React from "react"

const Message = (props) => {
   const messages = ["got it!","copied!","paste me!","panda style!", "its rock!"];
   const num = Math.floor(Math.random() *  5);
   
    return(
        <div className="message" style={{background: props.currentColor}}>
            <div>
    <h1>{messages[num]}</h1>
    <h3>{props.currentColor}</h3>
            </div>
        </div>
    )

}

export default Message;