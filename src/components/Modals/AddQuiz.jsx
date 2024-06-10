import { Form, Formik } from "formik";
import React, { useState } from "react";
import InputText from "../form/InputText";
import InputTextarea from "../form/InputTextarea";
import ToggleButton from "../form/ToggleButton";
import { addData, auth } from "../../firebase";
import toast from "react-hot-toast";
import Loader from "../Loader";

const AddQuiz = () => {
  const [step, setStep] = useState(1);
  const [quiz, setQuiz] = useState([]);
  const [show, setShow] = useState(false);

  return (
    <Formik
      initialValues={{
        question: "",
        options: [],
        answer: "",
      }}
      onSubmit={(values, action) => {
        if(!values.question){
          return toast.error('write a question')
        }
        if(!values.answer){
          return toast.error('show correct answer')
        }
        if (values.options.length > 1) {
          setQuiz((quiz) => [...quiz, values]);
          action.resetForm();
        } else {
          toast.error("quiz must consist of at least 2 answers");
        }
      }}
    >
      {({ values, setFieldValue }) => {
        const addOption = () => {
          setFieldValue("options", [...values.options, ""]);
        };

        const submitHandle = async () => {
          setQuiz((quiz) => [...quiz, values]);
          if (quiz.length >= 5) {
            setShow(true);
            await addData('quiz', {
              quiz,
              id: auth.currentUser.uid,
              code: random,
            });
            toast.success("Your quiz has been created successfully");
            setShow(true);
            setStep(2)
          } else {
            toast.error("quiz must consist of at least 5 questions");
          }
        };

        return (
          <Form className="flex flex-col gap-3">
            {step === 1 && (
              <>
                <InputTextarea label="Question..." name="question" />

                {values.options.map((option, key) => (
                  <div key={key} className="flex items-center gap-3">
                    <InputText label="Option..." name={`options[${key}]`} />
                    <ToggleButton name="answer" value={key} />
                  </div>
                ))}

                <div className="flex gap-3 w-full flex-wrap">
                  <button
                    type="button"
                    className="border-dashed border-2 border-indigo-500 rounded-lg py-1.5 text-lg font-medium text-indigo-500 transition-all duration-500 hover:bg-indigo-500 hover:text-white flex-auto disabled:opacity-50 disabled:pointer-events-none"
                    onClick={addOption}
                    disabled={!values.question}
                  >
                    Add Option
                  </button>

                  <button
                    type="submit"
                    className="submit-btn flex-auto disabled:opacity-50"
                  >
                    Next Question
                  </button>
                </div>
                <button
                  className="submit-btn"
                  type="button"
                  onClick={submitHandle}
                >
                  {show && <Loader />}
                  Submit
                </button>
              </>
            )}

            {
              (step === 2) && (
                <>
                  <span className="text-center text-xl italic">Your OTP code</span>
                  <h1 className="text-center text-5xl font-bold">{Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}</h1>
                </>
              )
            }
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddQuiz;
