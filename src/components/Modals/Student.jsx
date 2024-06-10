import { Form, Formik } from "formik";
import React from "react";
import InputText from "../form/InputText";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { getQuiz, setStudent } from "../../stores/quiz";
import { closeModal, openModal } from "../../stores/modal"
import { useNavigate } from "react-router-dom";

const Student = () => {
  const { allQuiz } = useSelector(state => state.quiz)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div>
      <Formik
        initialValues={{ name: "", otpCode: "" }}
        onSubmit={(values) => {
          const currentQuiz = allQuiz.find(s => s.code === values.otpCode)
          if(currentQuiz){
            dispatch(getQuiz(currentQuiz))
            dispatch(setStudent({
              name: values.name,
              code: values.otpCode
            }))
            dispatch(closeModal())
            navigate('/quiz', { replace: true })
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
