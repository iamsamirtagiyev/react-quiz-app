import { Form, Formik } from "formik";
import React, { useState } from "react";
import InputText from "../form/InputText";
import { BiEnvelope } from "react-icons/bi";
import InputPassword from "../form/InputPassword";
import { RxLockClosed } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { closeModal, openModal } from "../../stores/modal";
import { UserSchema } from "../../validations";
import { login } from "../../firebase";
import { loginUser } from "../../stores/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-4xl text-center font-bold mb-5">Login</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          const user = await login(values.email, values.password);
          if (user) {
            dispatch(loginUser(user));
            dispatch(closeModal());
            navigate("/teacher", { replace: true });
          }
        }}
      >
        <Form className="flex flex-col gap-3">
          <InputText label="Email" name="email" icon={<BiEnvelope />} />
          <InputPassword
            label="Password"
            name="password"
            icon={<RxLockClosed />}
          />
          <button type="submit" className="submit-btn">
            Login
          </button>
          <p className="text-center">
            I don't have an account{" "}
            <button
              type="button"
              className="text-indigo-500 font-medium underline"
              onClick={() => dispatch(openModal("signup"))}
            >
              Sign Up
            </button>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
