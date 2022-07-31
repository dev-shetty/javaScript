import React from "react";

function OptionA(props) {
    return(
        <div className="options">
            <h1>A. {props.quiz.optionA}</h1>
        </div>
    )
}

export default OptionA