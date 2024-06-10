import classNames from 'classnames';
import { useField } from 'formik';
import React, { useState } from 'react'

const ToggleButton = ({...props}) => {
  const [field, meta, helpers] = useField(props);
  const [checked, setChecked] = useState(false)
  return (
    <>
      <label className='relative  w-16 h-8 bg-zinc-300 rounded-full cursor-pointer after:absolute after:top-1/2 after:-translate-y-1/2 after:w-5 after:h-5 after:bg-indigo-500 after:rounded-full after:left-1.5  has-[:checked]:after:left-7 has-[:checked]:after:bg-white has-[:checked]:bg-indigo-500 after:transition-all after:duration-500 transition-all durration-500'>
        <input type="radio" {...field} {...props} className='hidden' />
      </label>
    </>
  )
}

export default ToggleButton