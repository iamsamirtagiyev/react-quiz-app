import classNames from "classnames";
import { ErrorMessage, useField } from "formik";
import React from "react";

const InputText = ({ label, icon, ...props }) => {
  const [field, meta, helpers] = useField(props);

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
          type="text"
          {...field}
          {...props}
          placeholder={label}
          className={classNames("input", {
            "placeholder:text-red-600 text-red-600": meta.error && meta.touched,
          })}
        />
      </div>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
      {/* <ErrorMessage name={field.name}/> */}
    </div>
  );
};

export default InputText;
