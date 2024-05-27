import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { openModal } from "../stores/modal"

const StudentOrTeacher = () => {
  const dispatch = useDispatch()
  return (
    <div className="flex gap-2 items-center flex-col w-full px-5">
      <button className="btn">
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
