import React from "react";

function Question(props) {
    return(
        <div className="question">
            <h1>Question: {props.quiz.question}</h1>
        </div>
    )
}

export default Question