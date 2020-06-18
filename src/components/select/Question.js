import React from 'react'
import shuffle from 'lodash.shuffle'

function Question ({ question, questionAnswer}) {
    const answers = shuffle([
        ...question.incorrect_answers,
        question.correct_answers,
    ])

    return(
        <div className="question">
            <h2 dangerouslySetInnerHTML={{__html: question.question}} />

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