'use client'
import React from 'react'
import { useFormik } from 'formik'

export default function FormikInput({ title, type, name }) {
  const formik = useFormik({
    initialValues: {
      title,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  return (
    <div>
      <label
        className="mb-2 block text-sm font-bold text-neutral-300"
        htmlFor={title}
      >
        {name}
      </label>
      <input
        id={title}
        name={title}
        placeholder={name}
        type={type}
        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        onChange={formik.handleChange}
      />
    </div>
  )
}
