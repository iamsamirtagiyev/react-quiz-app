import { Form, Formik } from "formik";
import React, { useState } from "react";
import InputText from "../form/InputText";
import { BiUser } from "react-icons/bi";
import InputFile from "../form/InputFile";
import { auth, update } from "../../firebase";
import Loader from "../Loader";
import { useDispatch } from "react-redux";
import { closeModal } from "../../stores/modal";
import { loginUser } from "../../stores/auth";

const Update = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  return (
    <div>
      <Formik
        initialValues={{
          photoURL: auth.currentUser.photoURL,
          displayName: auth.currentUser.displayName,
        }}
        onSubmit={async (values) => {
          setShow(true);
          await update({
            photoURL: URL.createObjectURL(values.photoURL),
            displayName: values.displayName,
          });
          dispatch(
            loginUser({
              displayName: auth.currentUser.displayName,
              email: auth.currentUser.email,
              photoURL: auth.currentUser.photoURL,
              uid: auth.currentUser.uid,
            })
          );
          setShow(false);
          dispatch(closeModal())
        }}
      >
        <Form className="flex flex-col gap-3">
          <InputFile name="photoURL" />
          <InputText label="Fullname" name="displayName" icon={<BiUser />} />
          <button type="submit" className="submit-btn">
            {show ? <Loader /> : "Update"}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Update;
