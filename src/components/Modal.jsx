import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modals } from "../modals";
import classNames from "classnames";
import { closeModal } from "../stores/modal";

const Modal = ({ name }) => {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.modal);
  const currentModal = modals.find((s) => s.name === name);
  const modalRef = useRef();
  return (
    <div
      ref={modalRef}
      onClick={(e) => modalRef.current === e.target && dispatch(closeModal())}
      className={classNames(
        "fixed w-full h-full bg-black/75 inset-0 transition-all dutation-500 z-10 opacity-0 invisible flex items-center justify-center p-5",
        {
          "!opacity-100 !visible animate-overlay": open,
        }
      )}
    >
      <div
        className={classNames(
          " bg-white w-full max-w-[500px] rounded-xl p-5 text-black opacity-0 invisible z-20 duration-500 transition-all",
          {
            "!opacity-100 !visible animate-modal": open,
          }
        )}
      >
        <currentModal.element />
      </div>
    </div>
  );
};

export default Modal;
