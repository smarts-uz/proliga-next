/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import Gutter from '../../../components/Gutter'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useUpdateUserData } from 'app/hooks/user/useUpdateUserData/useUpdateUserData'
import Link from 'next/link'
import { useUploadFile } from 'app/hooks/user/useUploadFile/useUploadFile'
import { useDownloadFile } from 'app/hooks/user/useDownloadFile/useDownloadFile'
function Page() {
  const [startDate, setStartDate] = useState(new Date())
  const { updateData, error, isLoading } = useUpdateUserData()
  const { uploadFile, isLoading: uploadLoading, } = useUploadFile()
  const {downloadFile,img}=useDownloadFile()  
  const [photo, setPhoto] = useState(null);
  const [imgPreview, setImgPreview] = useState(img);
  const handleFileChange = (e) => {
    const file = e.target.files[0]; 
    setImgPreview(URL.createObjectURL(file));
    setPhoto(file);
  };
  console.log(imgPreview);
  
  let rasm = document.getElementById('img')
  const uploadImage = async () => {
    await uploadFile(rasm.files[0])
    // window.location.reload()
  }  
  
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      middleName: '',
      birthdate: '',
      email: '',
      bio: '',
      gender: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  useEffect(() => {
    downloadFile()
  }, [])
  const update = async () => {
    try {
      await updateData(
        formik.values.firstName,
        formik.values.lastName,
        formik.values.middleName,
        formik.values.bio,
        formik.values.gender,
        startDate
      )
    } catch (error) {}
  }
  const auth_container='mx-4 flex w-full flex-col gap-4 rounded-xl bg-neutral-950 px-6 py-8 max-w-72 xs:max-w-[36rem] sm:max-w-[40rem] shadow shadow-neutral-500 md:p-8;'
  const auth_input='h-10 w-full rounded border border-yellow-700 bg-neutral-900 px-2 py-1 text-sm text-neutral-200 placeholder:text-neutral-500 md:text-base'
  return (
    <Gutter>
      <div className="z-10 mt-24 flex min-h-svh items-center justify-center py-6 text-gray-200 ">
        <form
          onSubmit={formik.handleSubmit}
          className={" max-w-[80rem] items-center justify-center gap-2 "+auth_container}
        >
          <h3 className="flex gap-4 text-xl">Ma&apos;lumot</h3>
          <label
                className=" my-2 block text-sm font-bold text-neutral-300"
                htmlFor="img"
              >
                <div className='relative'>
                <img src={imgPreview?imgPreview:img} className='rounded-full xl:size-56 md:size-40 lg:size-48 sm:size-36 xs:size-32 border-neutral-50 bg-neutral-300 border-2'  width={100} height={100} key={img} alt="img" />
                <span style={{ left: "calc(50% - 24px)", top: 'calc(50% - 24px)' }} className='absolute bg-green-600 block rounded-full w-12 h-12 top-0 text-black'>
                </span>
                </div>
              </label>
              <input type="file"   onChange={handleFileChange} id="img" className="hidden" />
              <button
                type="button"
                className={photo?"mt-4 w-full rounded-sm border border-primary bg-neutral-900 py-3 font-semibold transition-all hover:bg-black":('hidden')}
                onClick={() => uploadImage()}
              >
                Surat qo&apos;shish
              </button>
          <div className="flex">
            <div className="my-4 min-w-72 xs:max-w-96 sm:max-w-[36rem]">
              <label
                className="my-2 block text-sm font-bold text-neutral-300"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="text"
                disabled
                placeholder={'example@email.com'}
                className={auth_input}
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <label
                className="my-2 block text-sm font-bold text-neutral-300"
                htmlFor="firstName"
              >
                Ism
              </label>
              <input
                placeholder="Ism"
                id="firstName"
                name="firstName"
                type="text"
                className={auth_input}
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
              <label
                className="my-2 block text-sm font-bold text-neutral-300"
                htmlFor="lastName"
              >
                Familiya
              </label>
              <input
                id="lastName"
                name="lastName"
                placeholder="Familiya"
                type="text"
                className={auth_input}
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />

              <label
                className="my-2 block text-sm font-bold text-neutral-300"
                htmlFor="middleName"
              >
                Sharif
              </label>
              <input
                id="middleName"
                name="middleName"
                placeholder="Sharif"
                type="text"
                className={auth_input}
                onChange={formik.handleChange}
                value={formik.values.middleName}
              />

              <label
                className="my-2 block text-sm font-bold text-neutral-300"
                htmlFor="bio"
              >
                Siz haqingizda
              </label>
              <textarea
                id="bio"
                placeholder="Siz haqingizda"
                name="bio"
                type="date"
                cols={1}
                rows={5}
                className={auth_input+" min-h-64 gap-4"}
                onChange={formik.handleChange}
                value={formik.values.bio}
              />
              <div className="py-4 lg:flex">
                <div>
                  <label
                    className="mx-2 my-2  block text-sm font-bold text-neutral-300"
                    htmlFor="gender"
                  >
                    Jins
                  </label>
                  <select
                    id="gender"
                    className={auth_input+"mx-2 mr-2 lg:w-64"}
                    onChange={formik.handleChange}
                    value={formik.values.gender}
                  >
                    <option value="null">Tanlang</option>
                    <option value="male">Erkak</option>
                    <option value="female">Ayol</option>
                    <option value="unset">Belgilanmagan</option>
                  </select>
                </div>
                <div>
                  <label
                    className="my-2 block text-sm font-bold text-neutral-300"
                    htmlFor="birthdate"
                  >
                    Tug&apos;ilgan kuni
                  </label>
                  <DatePicker
                    id="birthdate"
                    selected={startDate}
                    className={auth_input+"mx-2 w-[288px] xs:w-[384px] sm:w-[576px] lg:w-72"}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
              </div>
              <Link className="text-blue-500" href={'/cabinet/update'}>
                Parolni yangilash
              </Link>
           
              <button
                className="mt-4 w-full rounded-sm border border-primary bg-neutral-900 py-3 font-semibold transition-all hover:bg-black"
                type="submit"
                onClick={() => update()}
              >
                Tahrirlash
              </button>
             
            </div>
          </div>
        </form>
      </div>
    </Gutter>
  )
}

export default Page
