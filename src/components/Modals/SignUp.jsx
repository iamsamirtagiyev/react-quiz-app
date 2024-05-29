import React, { useState } from "react";
import { Formik, Form } from "formik";
import InputText from "../form/InputText";
import { FaRegUser } from "react-icons/fa6";
import InputPassword from "../form/InputPassword";
import { UserSchema } from "../../validations";
import { RxLockClosed } from "react-icons/rx";
import { BiEnvelope } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { closeModal, openModal } from "../../stores/modal";
import { googleAuth, signup, update } from "../../firebase";
import { loginUser } from "../../stores/auth";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Loader from "../Loader";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false)

  const signInPopup = async () => {
    const user = await googleAuth()
    if (user) {
      dispatch(loginUser(user));
      dispatch(closeModal());
      navigate("/teacher", { replace: true });
    }
  }
  return (
    <div>
      <h1 className="text-4xl text-center font-bold mb-5">Sign Up</h1>
      <Formik
        initialValues={{
          name: "",
          surname: "",
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          setShow(true)
          const user = await signup(values.email, values.password);
          await update({ displayName: `${values.surname} ${values.name}` });
          setShow(false)
          if (user) {
            dispatch(loginUser({
              displayName: user.displayName,
              email: user.email,
              photoURL: user.photoURL,
              uid: user.uid
            }));
            dispatch(closeModal());
            navigate("/teacher", { replace: true });
          }
        }}
        validationSchema={UserSchema}
      >
        <Form className="flex flex-col gap-3">
          <div className="flex gap-3">
            <InputText label="name" name="name" icon={<FaRegUser />} />
            <InputText label="surname" name="surname" icon={<FaRegUser />} />
          </div>
          <InputText label="email" name="email" icon={<BiEnvelope />} />
          <InputPassword
            label="password"
            name="password"
            icon={<RxLockClosed />}
          />
          <button type="submit" className="submit-btn">
            {show ? <Loader/> : 'Sign Up'}
          </button>
          <div className='relative after:absolute after:h-[2px] after:w-[45%] after:bg-black/40 after:left-0 after:top-1/2 after:-translate-y-1/2 text-center before:absolute before:h-[2px] before:w-[45%] before:bg-black/40 before:right-0 before:top-1/2 before:-translate-y-1/2 text-xl font-medium my-2'>Or</div>
          <button type="button" className="border-2 hover:bg-black/10 transition-all duration-500 border-black/50 flex items-center justify-center gap-3 text-xl font-medium py-2 rounded" onClick={signInPopup}>
            <FcGoogle size={30}/>
            Google
          </button>
          <p className="text-center">
            I already have an account. 
            <button
              type="button"
              className="text-indigo-500 font-medium underline"
              onClick={() => dispatch(openModal("login"))}
            >
              Login
            </button>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUp;
