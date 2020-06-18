import React from 'react'

export default function Results({ isCorrect, question, getQuestion}){
    return(
        <div className={`results ${isCorrect ? "correct" : "incorrect"}`}>
            <div className="content">
                { isCorrect && (<h4>Impressive!</h4>)}
                { !isCorrect && (<h4>Shame!</h4>)}
            </div>

            { !isCorrect && (
                <div className="correct-answer">
                    <h4>The answer was: </h4>
                    <h3 dangerouslySetInnerHTML={{__html: question.correct_answer}} />
                </div>
            )}
            <button className="next-question" onClick={getQuestion}> Next Question</button>
        </div>
    )
}