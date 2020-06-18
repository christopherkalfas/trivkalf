import React, {useState, useEffect, useCallback} from 'react'
import CategorySelection from "./CategorySelection"
import Question from "./Question"
import AnswerTracker from "./AnswerTracker"


import Results from './Results'

export default function CategoryContainer(){
    const { question, getQuestion, category, setCategory } = TriviaAPI();
    const [isCorrect, setIsCorrect] = useState(null);

    function handleAnswerQuestion(answer){
        const isAnswerCorrect = answer === question.correct_answer
        setIsCorrect(isAnswerCorrect)
    }

    function handleNextQuestion(){
        setIsCorrect(null)
        getQuestion()
    }

    function TriviaAPI() {
        const [question, setQuestion] = useState(null);
        const [category, setCategory] = useState('any');
    
        const getQuestion = useCallback(()=> {
            let url = 'https://opentdb.com/api.php?amount=1';
    
            if (category !== 'any') url += `&category=${category}`
    
                fetch(url)
                    .then((resp) => resp.json())
                    .then((data)=> setQuestion(data.results[0]))
        }, [category])
    
        useEffect(()=> {
            getQuestion()
        }, [getQuestion, category])
    
        return {question, category, setQuestion, setCategory}
    }
    return(
        <div className="game-container">
            <div className="category-container">
                {isCorrect !==null && (
                    <Results
                        isCorrect={isCorrect}
                        question= {question}
                        getQuestion = {handleNextQuestion}
                    />
                )}
                <div className="question-head">
                    <CategorySelection category={category} selectCategory={setCategory} />
                    <AnswerTracker isCorrect={isCorrect} />
                </div>
                <div className="question-body">
                    {question && (

                    <Question question={question} questionAnswer={handleAnswerQuestion} />
                    )}
                </div>
                <div className="next-question-btn">
                    <button onClick={handleNextQuestion}>Next Question</button>
                </div>
            </div>
        </div>
    )
}
