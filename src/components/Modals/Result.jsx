import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { SiTicktick } from "react-icons/si";
import { addData } from '../../firebase';

const Result = () => {
  const { student, quiz } = useSelector(state => state.quiz)
   

  return (
    <div className='flex flex-col gap-3 items-center'>
      <div className='text-[100px] text-green-500'>
        <SiTicktick/>
      </div>
    <span className='text-4xl font-meduim italic text-center'>You answered {student.count} out of {quiz.quiz.length} questions correctly.</span>
    </div>
  )
}

export default Result