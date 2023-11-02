import React, { useState } from 'react'
import Quiz from 'react-quiz-component';
import { quiz } from '../quiz/quiz';
import ResultModal from './ResultModal';

const Test = () => {
  const [modal, setModal] = useState(false);
  const [result, setResult] = useState(null);

  const setQuizResult = (obj) => {
    setResult(obj)
    setModal(true);
  }

  return (
    <>
      <div className='mx-auto w-fit mt-[40px]'>
        <Quiz quiz={quiz} showDefaultResult={false} shuffleAnswer={true} shuffle={true} onComplete={setQuizResult}/>
      </div>
      {modal && <ResultModal result={result} setResult={setResult} setModal={setModal}/>}
    </>
  )
}

export default Test