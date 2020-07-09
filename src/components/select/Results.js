import React from 'react'
import Modal from 'react-modal'


Modal.setAppElement("#root")

export default function Results({ isCorrect, question, getQuestion}){
    return(
        <Modal
            isOpen={isCorrect !== null}
            closeTimeoutMS={4000}
            className={`results ${isCorrect ? "correct-color" : "incorrect-color"}`}
            overlayClassName="Overlay"
        >
        
        <div className="results-container" >
            {/* <div className={`results ${isCorrect ? "correct-color" : "incorrect-color"}`}> */}
                <div className="content">
                    { isCorrect && (<h1>Impressive!</h1>)}
                    { !isCorrect && (<h1>Shame!</h1>)}
                </div>

                { !isCorrect && (
                    <div className="correct-answer">
                        <h4>The answer was: </h4>
                        <h1 className="answer-name" dangerouslySetInnerHTML={{__html: question.correct_answer}} />
                    </div>
                )}
                {/* <div className="next-question">
                <button className="next-question-btn" onClick={getQuestion}> Next Question</button>
                </div> */}
            </div>
        {/* </div> */}
        </Modal>
    )
}