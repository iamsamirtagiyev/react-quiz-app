import { Form, Formik } from "formik";
import React, { useState } from "react";
import InputText from "../form/InputText";
import { BiEnvelope } from "react-icons/bi";
import InputPassword from "../form/InputPassword";
import { RxLockClosed } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { closeModal, openModal } from "../../stores/modal";
import { LoginSchema } from "../../validations";
import { auth, googleAuth, login } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Loader from "../Loader";

const Login = () => {
  const [count, setCount] = useState(3);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signInPopup = async () => {
    const user = await googleAuth();
    if (user) {
      dispatch(closeModal());
      navigate("/teacher", { replace: true });
    }
  };
  return (
    <div>
      <h1 className="text-4xl text-center font-bold mb-5">Login</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          setShow(true);
          const user = await login(values.email, values.password);
          setShow(false);
          if (user) {
            dispatch(closeModal());
            navigate("/teacher", { replace: true });
          } else {
            setCount((count) => count - 1);
            if (count == 0) {
              dispatch(openModal("send-email"));
            }
          }
        }}
        validationSchema={LoginSchema}
      >
        <Form className="flex flex-col gap-3">
          <InputText label="Email" name="email" icon={<BiEnvelope />} />
          <InputPassword
            label="Password"
            name="password"
            icon={<RxLockClosed />}
          />
          <button type="submit" className="submit-btn">
            {show ? <Loader /> : "Login"}
          </button>
          <div className="relative after:absolute after:h-[2px] after:w-[45%] after:bg-black/40 after:left-0 after:top-1/2 after:-translate-y-1/2 text-center before:absolute before:h-[2px] before:w-[45%] before:bg-black/40 before:right-0 before:top-1/2 before:-translate-y-1/2 text-xl font-medium my-2">
            Or
          </div>
          <button
            type="button"
            className="border-2 hover:bg-black/10 transition-all duration-500 border-black/50 flex items-center justify-center gap-3 text-xl font-medium py-2 rounded"
            onClick={signInPopup}
          >
            <FcGoogle size={30} />
            Google
          </button>
          <p className="text-center">
            I don't have an account
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
