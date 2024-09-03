'use client'

import Gutter from 'components/Gutter'
import { useFormik } from 'formik'

const UpdatePassword = () => {
  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <Gutter>
      <div className="mt-16">
        <form onSubmit={formik.handleSubmit}>
          <label
            className="mb-2 block text-sm font-bold text-neutral-300"
            htmlFor="email"
          >
            Eski parol
          </label>
          <input
            id="email"
            name="email"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-neutral-300 shadow focus:outline-none"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.oldPassword}
          />
          <label
            className="mb-2 block text-sm font-bold text-neutral-300"
            htmlFor="email"
          >
            Yangi parol
          </label>
          <input
            id="email"
            name="email"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-neutral-300 shadow focus:outline-none"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.oldPassword}
          />
          <label
            className="mb-2 block text-sm font-bold text-neutral-300"
            htmlFor="email"
          >
            Yangi parolni qayta kiriting
          </label>
          <input
            id="email"
            name="email"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-neutral-300 shadow focus:outline-none"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.oldPassword}
          />

          <button
            className="mt- focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </Gutter>
  )
}
export default UpdatePassword
