import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegEdit } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import { openModal } from "../stores/modal";
import { auth, logout } from "../firebase";
import { logoutUser } from "../stores/auth";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandle = async () => {
    await logout()
    dispatch(logoutUser())
    navigate('/', {replace: true})
  }

  return (
    <div className="w-full flex flex-col md:flex-row md:items-center gap-3 p-5 sm:p-8">
      <img
        className="w-28 h-28 rounded-full object-cover"
        src='./images/profile.avif'
        alt="profile"
      />
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold">
          { auth.currentUser.displayName }
        </h1>
        <div className="flex gap-2 items-center flex-wrap">
          <button className="action-btn flex-1 sm:flex-auto" onClick={logoutHandle}>
            <TbLogout2 size={20} />
            Log Out
          </button>
          <button className="action-btn flex-auto" onClick={() => dispatch(openModal("add-quiz"))}>
            <IoMdAdd size={20} />
            Add New Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
