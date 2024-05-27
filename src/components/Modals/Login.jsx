import React from "react";
import { Formik, Form } from "formik";
import InputText from "../form/InputText";
import { FaRegUser } from "react-icons/fa6";
import InputPassword from "../form/InputPassword";
import { UserSchema } from "../../validations";


const Login = () => {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          surname: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={UserSchema}
      >
        <Form className="flex flex-col gap-3">
          <div className="flex gap-3">
            <InputText label='name' name='name' icon={<FaRegUser/>}/>
            <InputText label='surname' name='surname' icon={<FaRegUser/>}/>
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
