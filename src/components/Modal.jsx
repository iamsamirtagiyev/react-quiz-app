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
        "fixed bg-black/75 inset-0  dutation-500 z-10 opacity-0 invisible",
        {
          "!opacity-100 !visible animate-overlay": open,
        }
      )}
    >
      <div
        className={classNames(
          "bg-white w-[90%] max-w-[500px] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl p-5 text-black opacity-0 invisible z-20 duration-500 transition-all",
          {
            "!opacity-100 !visible animate-modal": open,
          }
        )}
      >
        <currentModal.element/>
      </div>
    </div>
  );
};

export default Modal;
