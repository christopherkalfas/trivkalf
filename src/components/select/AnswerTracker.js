import React, {useState, useEffect } from 'react'

function Answertracker({isCorrect}) {
    const [correct, setCorrect] = useState(0)
    const [incorrect, setIncorrect] = useState(0)

    useEffect(()=> {
        if (isCorrect === null) return

        if (isCorrect){
            setCorrect((points) => points + 1)
        } else {
            setIncorrect((points)=> points + 1)
        }
    }, [isCorrect])

    return(
        <div className='round-conatiner'>
            <div className="row">
                    <div className="column">
                        <h5>Correct:</h5>
                        <h5>Incorrect: </h5>
                    </div>
                    <div className="column">
                        <h5>{correct}</h5>
                        <h5>{incorrect}</h5>
                    </div>
                </div>
        </div>
    )
}

export default Answertracker