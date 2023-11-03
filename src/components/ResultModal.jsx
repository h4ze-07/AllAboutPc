import React from 'react'

const ResultModal = ({result, setResult, setModal}) => {

  const handleClick = () => {
    setModal(false);
    setResult(null);
    location.reload();
  }

//   setTimeout(() => {
//     handleClick()
//   }, 5000)

  return (
    <div className='z-100 w-screen h-screen bg-[#00000083] absolute top-0 left-0'>
        
        <div className='t bg-white rounded-[30px] px-[20px] py-[30px] top-[50%] left-[50%] w-[400px] flex flex-col items-center'>
            <h3 className='font-bold text-[25px]'>Ви завершили тест!</h3>
            <p className='my-[20px]'>Ваша оцінка: <span className='font-bold text-[18px]'> {result.numberOfCorrectAnswers} / {result.numberOfQuestions} </span></p>
            <button className='py-[7px] px-[20px] rounded-[15px] border border-black text-[18px] font-semibold hover:text-white hover:bg-black'
            onClick={handleClick}
            >Закрити</button>
        </div>

    </div>
  )
}

export default ResultModal