import classNames from "classnames";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStudent } from "../stores/quiz";
import Loader from '../components/Loader'
import { openModal } from "../stores/modal";


const Quiz = () => {
  const { quiz, student } = useSelector((state) => state.quiz);
  const [index, setIndex] = useState(0);
  const [check, setCheck] = useState("");
  const [show, setShow] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [count, setCount] = useState(0)

  const dispatch = useDispatch();


  const submitHandle = (e) => {
    e.preventDefault();

    setAnswers((answers) => [...answers, check]);
    if(check == quiz.quiz[index].answer){
      setCount(count => count + 1)
    }
    setIndex((index) => index + 1);

    setCheck("");
    e.target.reset();
  }

  return (
    <>
      {show && (<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   flex items-center justify-center w-full h-full bg-black/50">
        <div className="flex items-center justify-center bg-white rounded-lg w-24 h-24">
          <Loader color="rgb(60, 102, 241)" color2="rgba(60, 102, 241, .5)" w="40" h="40" />
        </div>
      </div>)}
      {index < quiz.quiz.length && (
        <form
          className="w-full min-h-screen p-5 text-2xl font-bold capitalize flex flex-col gap-3"
          onSubmit={submitHandle}
        >
          <h1>
            {index + 1}. {quiz.quiz[index].question}
          </h1>
          {quiz.quiz[index].options.map((option, key) => (
            <label 
              key={key}
              className="relative pl-9 after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0 after:w-6 after:h-6 after:rounded-full after:border-2 after:border-indigo-500 before:absolute before:w-4 before:h-4 before:rounded-full before:bg-indigo-500 before:top-1/2 before:-translate-y-1/2 before:left-1 before:transition-all before:duration-500 before:scale-0 has-[:checked]:before:scale-100"
              >
              {option}
              <input
                type="radio"
                name="option"
                value={key}
                onClick={(e) => setCheck(e.target.value)}
                hidden
              />
            </label>
          ))}
          <div hidden={check == ""} className="mt-5">
            <button type="submit" className={classNames("submit-btn hover:!border-zinc-800 !px-10")}>
              Submit
            </button>
          </div>
        </form>
      )}
      {
        index == quiz.quiz.length && (
          <div className="w-full max-w-72">
            <button className="btn" onClick={ () => {
              dispatch(setStudent({ ...student, answers, count }))
              setShow(true)
              setTimeout(() => {
                setShow(false)
                dispatch(openModal('result'))
              }, 5000);
            }}>Result</button>
          </div>
        )
      }
    </>
  );
};

export default Quiz;
