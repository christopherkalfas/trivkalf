import React from 'react'
import shuffle from 'lodash.shuffle'

function Question ({ question, questionAnswer}) {
    const answers = shuffle([
        ...question.incorrect_answers,
        question.correct_answer,
    ])
    
    return(
        <div className="options-container">
        <h3> Question: </h3>
            <h4 dangerouslySetInnerHTML={{__html: question.question}} />

            { answers.map((answer, index) => (
                <button
                    key={index}
                    onClick={()=> questionAnswer(answer)}
                    dangerouslySetInnerHTML={{__html: answer}}
                    
                />
            )) }
        </div>
    )
}

export default Question