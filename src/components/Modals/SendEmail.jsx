import { Form, Formik } from "formik";
import React, { useState } from "react";
import { EmailSchema } from "../../validations";
import InputText from "../form/InputText";
import { BiEnvelope } from "react-icons/bi";
import { sendEmail } from "../../firebase";
import Loader from "../Loader";

const SendEmail = () => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={async (values) => {
          setShow(true)
          await sendEmail(values.email)
          setShow(false)
        }}
        validationSchema={EmailSchema}
      >
        <Form className="flex flex-col gap-3">
          <InputText label="Email" name="email" icon={<BiEnvelope />} />
          <button type="submit" className="submit-btn">
            {show ? <Loader/> : 'Send Email'}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SendEmail;
