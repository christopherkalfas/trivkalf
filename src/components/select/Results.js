import React from 'react'
import Modal from 'react-modal'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

Modal.setAppElement("#root")

export default function Results({ isCorrect, question, getQuestion}){
   

    return(
        <Modal
            isOpen={isCorrect !== null}
            closeTimeoutMS={3000}
            customStyles = {customStyles}
        >

        <div className="results-container" >
   
            <div className={`results ${isCorrect ? "correct" : "incorrect"}`}>
                <div className="content">
                    { isCorrect && (<h1>Impressive!</h1>)}
                    { !isCorrect && (<h1>Shame!</h1>)}
                </div>

                { !isCorrect && (
                    <div className="correct-answer">
                        <h4>The answer was: </h4>
                        <h2 className="answer-name" dangerouslySetInnerHTML={{__html: question.correct_answer}} />
                    </div>
                )}
                {/* <div className="next-question">
                <button className="next-question-btn" onClick={getQuestion}> Next Question</button>
                </div> */}
            </div>
        </div>
        </Modal>
    )
}