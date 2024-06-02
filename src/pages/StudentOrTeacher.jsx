import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../stores/modal"
import { Navigate } from "react-router-dom";

const StudentOrTeacher = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)

  if(user){
    return <Navigate to='/teacher' replace={true}/>
  }

  return (
    <div className="flex gap-2 items-center flex-col w-full px-5">
      <button className="btn" onClick={() => dispatch(openModal('student'))}>
        <PiStudent/>
        Student
      </button>
      <button className="btn" onClick={() => dispatch(openModal('login'))}>
        <FaChalkboardTeacher/>
        Teacher
      </button>
    </div>
  );
};

export default StudentOrTeacher;
