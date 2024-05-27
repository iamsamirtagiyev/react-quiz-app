import { useField } from "formik";
import React from "react";

const InputPassword = ({ label, icon, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <div className="field group">
      <span className="icon">{icon}</span>
      <label htmlFor={label} className="label">
        {label}
      </label>
      <input
        type="text"
        id={label}
        {...field}
        {...props}
        className="input peer"
        required
      />
    </div>
  );
};

export default InputPassword;