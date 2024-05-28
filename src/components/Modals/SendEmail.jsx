import { Form, Formik } from "formik";
import React from "react";
import { UserSchema } from "../../validations";
import InputText from "../form/InputText";
import { BiEnvelope } from "react-icons/bi";
import { sendEmail } from "../../firebase";

const SendEmail = () => {
  return (
    <div>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={async (values) => {
          await sendEmail(values.email)
        }}
      >
        <Form className="flex flex-col gap-3">
          <InputText label="Email" name="email" icon={<BiEnvelope />} />
          <button type="submit" className="submit-btn">
            Send Email
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SendEmail;
