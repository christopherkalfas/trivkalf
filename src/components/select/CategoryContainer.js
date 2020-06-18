import React, {useState} from 'react'
import CategorySelection from "./CategorySelection"
import Question from "./Question"
import AnswerTracker from "./AnswerTracker"
import TriviaAPI from "./TriviaAPI"

export default function CategoryContainer(){
    const { question, getQuestion, category, setCategory } = TriviaAPI();
    const [isCorrect, setIsCorrect] = useState(null);

    function handleAnswerQuestion(answer){
        const isAnswerCorrect = answer === question.correct_answer
        setIsCorrect(isAnswerCorrect)
    }
    return(
        <div className="category-container">
            result will do here
            <div className="question-head">
                <CategorySelection category={category} selectCategory={setCategory} />
                <AnswerTracker isCorrect={isCorrect} />
            </div>
            <div className="question-body">
                <Question question={question} questionAnswer={handleAnswerQuestion} />
            </div>
        </div>
    )
}

