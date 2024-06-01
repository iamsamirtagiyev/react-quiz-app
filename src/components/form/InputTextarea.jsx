import classNames from "classnames";
import { ErrorMessage, useField } from "formik";
import React from "react";

const InputTextarea = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <div>
      <div
        className={classNames("", {
          "!border-red-600": meta.error && meta.touched,
        })}
      >
        <textarea
          {...field}
          {...props}
          placeholder={label}
          className={classNames("input !border-2 !border-black/50 rounded-lg py-2 !px-4 capitalize resize-none", {
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

export default InputTextarea;