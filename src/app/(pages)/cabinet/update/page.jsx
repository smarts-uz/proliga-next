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
        <form className="auth-container" onSubmit={formik.handleSubmit}>
          <div className="my-4 max-w-72 xs:max-w-96 sm:max-w-[36rem]">
            <label
              className="mb-2 block text-sm font-bold text-neutral-300"
              htmlFor="email"
            >
              Eski parol
            </label>
            <input
              id="email"
              name="email"
              className="auth-input"
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
              className="auth-input"
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
              className="auth-input"
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
          </div>
        </form>
      </div>
    </Gutter>
  )
}
export default UpdatePassword
