import React, {useState, useEffect, useCallback} from 'react'
import CategorySelection from "./CategorySelection"
import Question from "./Question"
import AnswerTracker from "./AnswerTracker"
import Footer from "../Footer"


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
    
        return {question, category, getQuestion, setCategory}
    }
    return(
        <div className="game-container">
            <div className="sub-container">
                <div className="question-head">
                    <h3>Category:</h3>
                    <h4>{category}</h4>
                </div>
                <div className="question-body">
                    {question && (

                    <Question question={question} questionAnswer={handleAnswerQuestion} />
                    )}
                </div>
                <div className="next-question-btn">
                {isCorrect !==null && (
                    <Results
                        isCorrect={isCorrect}
                        question= {question}
                        getQuestion = {handleNextQuestion}
                    />
                )}
                    {/* <button onClick={handleNextQuestion}>Next Question</button> */}
                </div>
            </div>
            <div className="round-container">
                    <AnswerTracker isCorrect={isCorrect} />
                    <CategorySelection category={category} selectCategory={setCategory} />
                    <Footer />
            </div>
        </div>
    )
}
