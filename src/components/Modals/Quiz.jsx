import classNames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

const Quiz = () => {
    const [question, setQuestion] = useState(0)
    const [checked, setChecked] = useState(false)
    const radioRef = useRef()
    const { quiz } = useSelector(state => state.quiz)
    console.log(quiz);

    const changeHandle = e => {
        setChecked(e.target.value)
    }

  return (
    <div className='flex flex-col gap-3'>
        <div className='flex gap-1 text-lg font-bold'>
            <h2>{question + 1}.</h2>
            <p>{quiz.quiz[question].question}</p>
        </div>
        <div className='flex flex-col gap-2'>
            {
                quiz.quiz[question].options.map((option, index) => (
                    <label key={index} className={classNames('relative bg-black/20 px-3 pl-10 py-2 rounded capitalize text-lg cursor-pointer font-medium transition-all duration-500 hover:bg-black/30 flex items-center gap-2  after:absolute after:w-5 after:h-5 after:border-2 after:border-indigo-500 after:left-3 after:rounded-full before:absolute before:w-3 before:h-3 before:bg-indigo-500 before:left-4 before:rounded-full before:scale-0 has-[:checked]:before:scale-100 before:transition-all before:duration-500')}>
                        
                        {option}
                        <input type="radio" ref={radioRef} name="answer" onChange={changeHandle} value={index}  hidden />
                    </label>
                ))
            }
        </div>
    </div>
  )
}

export default Quiz