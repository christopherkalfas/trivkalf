import React, {useState, useEffect  } from 'react'



function Answertracker({isCorrect, getQuestion}) {
    const [correct, setCorrect] = useState(0)
    const [incorrect, setIncorrect] = useState(0)
    

   

   

    useEffect(()=> {
        if (isCorrect === null) return

        if (isCorrect){
            setCorrect((points) => points + 1)

            setTimeout(()=>{
                getQuestion()
            }, 3000)

          
        } else {
            setIncorrect((points)=> points + 1)

            setTimeout(()=>{
                getQuestion()
            }, 4000)
            
        }
    }, [isCorrect, getQuestion])

    return(
        <div>
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
                <div className="row">
                <button
                    className="restart"
                    onClick={ () => {
                        setCorrect(0)
                        setIncorrect(0)
                    }}>Restart</button>
                </div>
                
        </div>
    )
}

export default Answertracker