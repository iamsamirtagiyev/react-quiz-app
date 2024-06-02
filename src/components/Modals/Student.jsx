import { Form, Formik } from "formik";
import React from "react";
import InputText from "../form/InputText";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { getQuiz } from "../../stores/quiz";
import { openModal } from "../../stores/modal"

const Student = () => {
  const { allQuiz } = useSelector(state => state.quiz)
  const dispatch = useDispatch()
  return (
    <div>
      <Formik
        initialValues={{ name: "", otpCode: "" }}
        onSubmit={(values) => {
          const currentQuiz = allQuiz.find(s => s.code === values.otpCode)
          if(currentQuiz){
            dispatch(getQuiz(currentQuiz))
            dispatch(openModal('quiz'))
          }
          else{
            toast.error('Wrong code. Please try again')
          }
        }}
      >
        <Form className="flex flex-col gap-3">
          <InputText label="Name" name="name" />
          <InputText type='number' label="Code" name="otpCode" />
          
          <button type="submit" className="submit-btn">
            Start
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Student;
