import { useField } from "formik";
import React, { useState } from "react";
import { TbPhotoPlus } from "react-icons/tb";
import { useSelector } from "react-redux";
import { auth } from '../../firebase'
const InputFile = ({ ...props }) => {
  const { user } = useSelector(state => state.auth)
  const [image, setImage] = useState(auth.currentUser.photoURL ?? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png')
  const [field, meta, helpers] = useField(props);
  const changeHandle = e => {
    setImage(URL.createObjectURL(e.target.files[0]))
    helpers.setValue(e.target.files[0])
  }

  return (
    <div className="w-full flex items-center justify-center">
      <label className="relative">
        <div className="absolute w-full h-full rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-all duration-500">
          <TbPhotoPlus size={30} className="" />
        </div>
        <img
          className="w-28 h-28 rounded-full object-cover m-auto"
          src={image}
          alt=""
        />
        <input
          type="file"
          {...props}
          className="hidden"
          accept="image/*"
          onChange={changeHandle}
        />
      </label>
    </div>
  );
};

export default InputFile;
