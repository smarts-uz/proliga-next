/* eslint-disable @next/next/no-img-element */
'use client'

import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useGetUserPhoto } from 'app/hooks/user/useGetUserPhoto/useGetUserPhoto'
import Image from 'next/image'
import OTPConfirmationModal from 'components/OTPConfirmationModal'
import RefillBalanceModal from 'components/RefillBalanceModal'

const CabinetHomeTab = ({ setSettingsTab }) => {
  const { userTable, publicUrl } = useSelector((store) => store.auth)
  const { t } = useTranslation()
  const [otpModal, setOtpModal] = useState(false)
  const [balanceModal, setBalanceModal] = useState(false)
  const { getUserPhoto } = useGetUserPhoto()

  const date = new Date(userTable?.birth_date)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  const handleBalanceModal = () => {
    if (otpModal) {
      setOtpModal(false)
    }
    if (balanceModal) {
      setBalanceModal(false)
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'auto'
      }
    } else {
      setBalanceModal(true)
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'hidden'
      }
    }
  }

  const handleOtpModal = () => {
    if (balanceModal) {
      setBalanceModal(false)
    }
    if (otpModal) {
      setOtpModal(false)
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'auto'
      }
    } else {
      setOtpModal(true)
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'hidden'
      }
    }
  }

  const getCorrectGenderText = (gender) => {
    if (gender === 'male') {
      return t('Erkak')
    } else if (gender === 'female') {
      return t('Ayol')
    } else {
      return t('Belgilanmagan')
    }
  }

  useEffect(() => {
    if (userTable?.photo) {
      const fetch = async () => await getUserPhoto()
      fetch()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userTable])

  return (
    <>
      <motion.section
        initial={{ opacity: 0.25 }}
        animate={{ opacity: 1 }}
        className="flex h-full w-full flex-1 flex-col gap-4 rounded-xl bg-neutral-900 p-4 lg:h-auto xl:p-6"
      >
        <div className="flex items-center gap-2 md:gap-4">
          {userTable?.email && (
            <div className="flex size-16 select-none items-center justify-center rounded-full bg-primary text-4xl font-bold uppercase text-black md:size-24">
              {userTable.email.slice(0, 1)}
            </div>
          )}
          {publicUrl && (
            <img
              src={publicUrl}
              className="flex size-8 select-none rounded-full md:size-12"
              alt="user avatar"
              width={24}
              height={24}
            />
          )}

          <div className="flex flex-col justify-center gap-2 text-sm md:text-base">
            <div className="flex gap-1 text-sm font-bold capitalize text-neutral-50 xs:max-w-64 md:max-w-96 md:text-base">
              <p className="truncate">
                {userTable?.name ? userTable?.name : t('Ism')}
              </p>
              <p className="truncate lg:hidden">
                {userTable?.last_name
                  ? userTable?.last_name.slice(0, 1) + '.'
                  : t('Familiya')}
              </p>
              <p className="hidden truncate lg:block">
                {userTable?.last_name ? userTable?.last_name : t('Familiya')}
              </p>
              <p className="truncate lg:hidden">
                {userTable?.middle_name
                  ? userTable?.middle_name.slice(0, 1) + '.'
                  : t('Sharif')}
              </p>
              <p className="hidden truncate lg:block">
                {userTable?.middle_name ? userTable?.middle_name : t('Sharif')}
              </p>
            </div>
            <span className="text-neutral-300">{userTable?.email}</span>
          </div>
          <button
            onClick={setSettingsTab}
            className="ml-auto rounded border border-primary bg-black px-2 py-1 text-neutral-100 transition-all hover:bg-primary hover:text-black"
          >
            {t('Tahrirlash')}
          </button>
        </div>
        <section className="flex flex-col gap-2">
          <h3 className="font-medium capitalize xs:text-lg">
            {t('Qisqacha Malumot')}:
          </h3>
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
            <div className="flex gap-2 rounded border border-neutral-500 bg-neutral-800 p-2">
              <div className="flex items-center gap-1 capitalize">
                <Image
                  src="/icons/call.svg"
                  className="filter-neutral-50 size-5 sm:size-6"
                  alt="phone"
                  width={24}
                  height={24}
                />
                <p className="text-sm sm:text-base">{t('Telefon raqam')} :</p>
              </div>
              <p>{userTable?.phone}</p>
            </div>
            <div className="flex gap-2 rounded border border-neutral-500 bg-neutral-800 p-2">
              <div className="flex items-center gap-1 capitalize">
                <Image
                  src="/icons/calendar.svg"
                  alt="phone"
                  width={24}
                  height={24}
                  className="filter-neutral-50 size-5 sm:size-6"
                />
                <p className="text-sm sm:text-base">{t("Tug'ilgan kuni")} :</p>
              </div>
              <p>{day + '/' + month + '/' + year}</p>
            </div>
            <div className="flex gap-2 rounded border border-neutral-500 bg-neutral-800 p-2">
              <div className="flex gap-1 capitalize">
                <Image
                  src="/icons/two-people.svg"
                  alt="phone"
                  width={24}
                  height={24}
                  className="filter-neutral-50 size-5 sm:size-6"
                />
                <p className="text-sm sm:text-base">{t('Jins')} :</p>
              </div>
              <p>
                {getCorrectGenderText(userTable?.gender) ?? t('Belgilanmagan')}
              </p>
            </div>
          </div>
        </section>
        <section>
          <h3 className="font-medium xs:text-lg">{t('Bio')}:</h3>
          <div className="scroll-y-auto h-40 rounded border border-neutral-500 bg-neutral-800 p-2">
            {userTable?.bio ? userTable?.bio : t("Ma'lumot yo'q")}
          </div>
        </section>
        <section className="flex flex-wrap justify-center gap-2 sm:justify-start">
          <div
            className={`flex size-44 cursor-pointer flex-col justify-center gap-2 rounded-xl border border-neutral-400 bg-transparent p-4 transition-all sm:size-56 sm:p-6 2xl:size-64`}
          >
            <Image
              src="/icons/wallet.svg"
              draggable={false}
              width={36}
              height={36}
              className="filter-neutral-50 size-10 self-center sm:size-16"
              alt="wallet"
            />
            <div className="w-full self-center text-center">
              <h4 className="text-sm font-medium xs:text-base sm:text-lg">
                {t('Proliga hisobi')}
              </h4>
              <p className="text-sm text-neutral-400">
                {t('Hisobda')}:{' '}
                <span className="font-bold text-neutral-50">4000 </span>
                {t("so'm")}
              </p>
            </div>
            <button
              onClick={handleBalanceModal}
              className="rounded border py-1 text-sm transition-all hover:bg-primary hover:text-neutral-900"
            >
              {t('Hisobni toldirish')}
            </button>
          </div>
          <div
            className={`flex size-44 cursor-pointer flex-col justify-center gap-2 rounded-xl border border-primary bg-transparent p-4 transition-all sm:size-56 sm:p-6 2xl:size-64`}
          >
            <Image
              src="/icons/call.svg"
              draggable={false}
              width={36}
              height={36}
              className="filter-neutral-50 size-10 self-center sm:size-16"
              alt="wallet"
            />
            <div className="w-full self-center text-center">
              <h4 className="text-sm font-medium xs:text-base sm:text-lg">
                {t('Telefon raqam tasdiqlash')}
              </h4>
            </div>
            <button
              onClick={handleOtpModal}
              className="rounded border py-1 text-sm transition-all hover:bg-primary hover:text-neutral-900"
            >
              {t('Tasdiqlash')}
            </button>
          </div>
        </section>
      </motion.section>
      {otpModal && <OTPConfirmationModal toggleModal={handleOtpModal} />}
      {balanceModal && <RefillBalanceModal toggleModal={handleBalanceModal} />}
    </>
  )
}

export default CabinetHomeTab
