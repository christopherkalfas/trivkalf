import React from 'react'

export default function Results({ isCorrect, question, getQuestion}){
    return(
        <div className="results-container">
            <div className={`results ${isCorrect ? "correct" : "incorrect"}`}>
                <div className="content">
                    { isCorrect && (<h1>Impressive!</h1>)}
                    { !isCorrect && (<h1>Shame!</h1>)}
                </div>

                { !isCorrect && (
                    <div className="correct-answer">
                        <h4>The answer was: </h4>
                        <h3 className="answer-name" dangerouslySetInnerHTML={{__html: question.correct_answer}} />
                    </div>
                )}
                <div className="next-question">
                <button className="next-question-btn" onClick={getQuestion}> Next Question</button>
                </div>
            </div>
        </div>
    )
}