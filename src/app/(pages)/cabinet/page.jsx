/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Image from 'next/image'

import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import Gutter from '../../../components/Gutter'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useUpdateUserData } from 'app/hooks/user/useUpdateUserData/useUpdateUserData'
import Link from 'next/link'
import { useUploadFile } from 'app/hooks/user/useUploadFile/useUploadFile'
import { useDownloadFile } from 'app/hooks/user/useDownloadFile/useDownloadFile'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'

function UserCabinet() {
  const [startDate, setStartDate] = useState(new Date())
  const { updateData, error, isLoading } = useUpdateUserData()
  const { uploadFile, isLoading: uploadLoading } = useUploadFile()
  const { downloadFile, img } = useDownloadFile()
  const [photo, setPhoto] = useState(null)
  const [imgPreview, setImgPreview] = useState(img)
  const { userTable } = useSelector((store) => store.auth)
  const { t } = useTranslation()

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setImgPreview(URL.createObjectURL(file))
    setPhoto(file)
  }

  const uploadImage = async () => {
    await uploadFile(photo)
    setTimeout(() => {
      window.location.reload()
    }, 3000)
  }

  const formik = useFormik({
    initialValues: {
      firstName: userTable?.name ?? '',
      lastName: userTable?.last_name ?? '',
      middleName: userTable?.midde_name ?? '',
      birthdate: userTable?.bith_date ?? '',
      email: userTable?.email ?? '',
      bio: userTable?.bio ?? '',
      gender: userTable?.gender ?? '',
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
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <Gutter>
      <div className="z-10 mt-24 flex min-h-svh items-center justify-center py-6 text-gray-200">
        <form
          onSubmit={formik.handleSubmit}
          className={
            'flex w-full flex-col items-center justify-center gap-2 rounded-xl bg-neutral-950 px-4 py-6 shadow shadow-neutral-500 sm:max-w-96 md:max-w-[30rem] md:gap-4 md:px-6 md:py-6'
          }
        >
          <h3 className="flex gap-4 text-xl"> {t("Ma'lumot")}</h3>
          <label
            className="my-2 block text-sm font-bold text-neutral-300"
            htmlFor="img"
          >
            <div className="group relative">
              <img
                src={imgPreview ? imgPreview : img ? img : '/icons/user.svg'}
                className="rounded-full border-2 border-neutral-50 bg-neutral-300 xs:size-32 sm:size-36 md:size-40 lg:size-48"
                width={100}
                height={100}
                key={img}
                alt="user avatar"
              />
              <label
                htmlFor="img"
                type="button"
                style={{ left: 'calc(50% - 24px)', top: 'calc(50% - 24px)' }}
                className="absolute top-0 hidden h-12 w-12 cursor-pointer items-center justify-center rounded-md bg-neutral-50 group-hover:flex"
              >
                <Image
                  width={48}
                  height={48}
                  alt="edit"
                  src="/icons/edit.svg"
                  className="filter-neutral-950 size-10"
                />
              </label>
            </div>
            <h2 className="pt-4 text-center text-primary hover:underline xl:hidden">
            {t("Su’rat qo‘shish")}
            </h2>
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            id="img"
            accept="image/*"
            className="hidden"
          />
          <button
            type="button"
            className={
              photo
                ? 'w-32 rounded-sm border border-neutral-500 bg-neutral-900 py-3 font-semibold transition-all hover:bg-black'
                : 'hidden'
            }
            onClick={() => uploadImage()}
          >
             {t("Yuklash")}
          </button>
          <div className="w-full">
            <label
              className="my-2 block text-sm font-bold text-neutral-300"
              htmlFor="email"
            >
              email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              disabled
              placeholder={userTable?.email ?? 'example@email.com'}
              className="h-10 w-full rounded border border-yellow-700 bg-neutral-900 px-2 py-1 text-sm text-neutral-200 placeholder:text-neutral-500 md:text-base"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div className="w-full">
            <label
              className="my-2 block text-sm font-bold text-neutral-300"
              htmlFor="firstName"
            >
              {t("Ism")}
            </label>
            <input
              placeholder={userTable?.name ??  t("Ism")}
              id="firstName"
              name="firstName"
              type="text"
              className="h-10 w-full rounded border border-yellow-700 bg-neutral-900 px-2 py-1 text-sm text-neutral-200 placeholder:text-neutral-500 md:text-base"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
          </div>
          <div className="w-full">
            <label
              className="my-2 block text-sm font-bold text-neutral-300"
              htmlFor="lastName"
            >
              {t("Familiya")}
            </label>
            <input
              id="lastName"
              name="lastName"
              placeholder={userTable?.last_name ?? t("Familiya")}
              type="text"
              className="h-10 w-full rounded border border-yellow-700 bg-neutral-900 px-2 py-1 text-sm text-neutral-200 placeholder:text-neutral-500 md:text-base"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
          </div>
          <div className="w-full">
            <label
              className="my-2 block text-sm font-bold text-neutral-300"
              htmlFor="middleName"
            >
              {t("Sharif")}
            </label>
            <input
              id="middleName"
              name="middleName"
              placeholder={userTable?.midde_name ?? t("Sharif")}
              type="text"
              className="h-10 w-full rounded border border-yellow-700 bg-neutral-900 px-2 py-1 text-sm text-neutral-200 placeholder:text-neutral-500 md:text-base"
              onChange={formik.handleChange}
              value={formik.values.middleName}
            />
          </div>
          <div className="w-full">
            <label
              className="my-2 block text-sm font-bold text-neutral-300"
              htmlFor="bio"
            >
              {t("Siz haqingizda")}
            </label>
            <textarea
              id="bio"
              placeholder={userTable?.bio ?? t("Siz haqingizda")}
              name="bio"
              type="date"
              cols={1}
              rows={5}
              className="h-10 min-h-64 w-full gap-4 rounded border border-yellow-700 bg-neutral-900 px-2 py-1 text-sm text-neutral-200 placeholder:text-neutral-500 md:text-base"
              onChange={formik.handleChange}
              value={formik.values.bio}
            />
          </div>
          <div className="w-full">
            <label
              className="mx-2 my-2 block text-sm font-bold text-neutral-300"
              htmlFor="gender"
            >
              {t("Jins")}
            </label>
            <select
              id="gender"
              className="mr-2 h-10 w-full rounded border border-yellow-700 bg-neutral-900 px-2 py-1 text-sm text-neutral-200 placeholder:text-neutral-500 md:text-base"
              onChange={formik.handleChange}
              value={formik.values.gender}
            >
              <option value="null">{t("Tanlang")}</option>
              <option value="male"> {t("Erkak")}</option>
              <option value="female">{t("Ayol")}</option>
              <option value="unset">{t("Belgilanmagan")}</option>
            </select>
          </div>
          <div className="flex w-full flex-col">
            <label
              className="my-2 block text-sm font-bold text-neutral-300"
              htmlFor="birthdate"
            >
              {t("Tug'ilgan kuni")}
            </label>
            <DatePicker
              id="birthdate"
              selected={startDate}
              className="h-10 w-full rounded border border-yellow-700 bg-neutral-900 px-2 py-1 text-sm text-neutral-200 placeholder:text-neutral-500 md:text-base"
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className="flex w-full justify-between">
            <Link
              className="text-primary hover:underline"
              href={'/cabinet/update'}
            >
              {t("Hisobni to'ldirish")}
            </Link>
            <Link
              className="mx-3 text-primary hover:underline"
              href={'/cabinet/update'}
            >
               {t("Parolni yangilash")}
            </Link>
          </div>
          <button
            className="mt-4 w-full rounded-sm border border-primary bg-neutral-900 py-3 font-semibold transition-all hover:bg-black"
            type="submit"
            onClick={() => update()}
          >
           {t("Tahrirlash")}
          </button>
        </form>
      </div>
    </Gutter>
  )
}

export default UserCabinet
