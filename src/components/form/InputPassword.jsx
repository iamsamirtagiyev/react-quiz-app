import classNames from "classnames";
import { ErrorMessage, useField } from "formik";
import React, { useState } from "react";
import { PiEyeClosedBold, PiEyeBold } from "react-icons/pi";

const InputPassword = ({ label, icon, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const [show, setShow] = useState(false);
  return (
    <div>
      <div
        className={classNames("field", {
          "!border-red-600": meta.error && meta.touched,
        })}
      >
        <span
          className={classNames("icon", {
            "!text-red-600 after:bg-red-600": meta.error && meta.touched,
          })}
        >
          {icon}
        </span>
        <input
          type={show ? "text" : "password"}
          {...field}
          {...props}
          placeholder={label}
          className={classNames("input", {
            "placeholder:text-red-600 text-red-600": meta.error && meta.touched,
          })}
        />
        <div
          className={classNames("icon after:bg-transparent", {
            "!text-red-600 after:bg-red-600": meta.error && meta.touched,
          })}
          onClick={() => setShow(!show)}
        >
          {show ? <PiEyeBold size={22} /> : <PiEyeClosedBold size={22} />}
        </div>
      </div>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default InputPassword;
