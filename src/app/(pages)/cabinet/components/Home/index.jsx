'use client'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import Image from 'next/image'
import OTPConfirmationModal from 'components/OTPConfirmationModal'
import RefillBalanceModal from 'components/RefillBalanceModal'
import { useState } from 'react'

const CabinetHomeTab = ({ setSettingsTab }) => {
  const { userAuth, userTable, isLoading } = useSelector((store) => store.auth)
  const { t } = useTranslation()
  const [otpModal, setOtpModal] = useState(false)
  const [balanceModal, setBalanceModal] = useState(false)

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

  return (
    <>
      <motion.section
        initial={{ opacity: 0.25 }}
        animate={{ opacity: 1 }}
        className="flex h-full w-full flex-1 flex-col gap-4 rounded-xl bg-neutral-900 p-4 lg:h-auto xl:p-6"
      >
        <div className="flex items-center gap-2 md:gap-4">
          {userAuth?.user?.email && (
            <div className="flex size-16 select-none items-center justify-center rounded-full bg-primary text-4xl font-bold uppercase text-black md:size-24">
              {userAuth.user.email.slice(0, 1)}
            </div>
          )}
          <div className="flex flex-col justify-center gap-2 text-sm md:text-base">
            <div className="flex gap-1 font-bold capitalize text-neutral-50">
              <div>
                {userTable?.lastName ? userTable?.lastName : t('Familiya')}
              </div>
              <div>{userTable?.name ? userTable?.name : t('Ism')}</div>
              <div>
                {userTable?.middleName ? userTable?.middleName : t('Sharif')}
              </div>
            </div>
            <span className="text-neutral-300">{userTable?.email}</span>
          </div>
          <button
            onClick={setSettingsTab}
            className="ml-auto rounded border border-primary bg-black px-2 py-1 text-neutral-100 transition-all hover:bg-primary hover:text-black"
          >
            Edit
          </button>
        </div>
        <section className="flex flex-col gap-2">
          <h3 className="text-lg font-medium md:text-xl">Qisqacha Malumot:</h3>
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
            <div className="flex gap-2 rounded border border-neutral-500 bg-neutral-800 p-2">
              <div className="flex gap-1 capitalize">
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
              <div className="flex gap-1 capitalize">
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
              <p>{userTable.gender ?? 'Belgilanmagan'}</p>
            </div>
          </div>
        </section>
        <section>
          <h3 className="text-lg font-medium md:text-xl">Bio:</h3>
          <div className="scroll-y-auto h-40 rounded border border-neutral-500 bg-neutral-800 p-2">
            {userTable?.bio ? userTable?.bio : t("Ma'lumot yo'q")}
          </div>
        </section>
        <section className="flex flex-wrap justify-center gap-2 sm:justify-start">
          <div
            className={`flex size-44 cursor-pointer flex-col justify-center gap-2 rounded-xl border border-neutral-400 bg-transparent p-4 transition-all sm:size-64 sm:p-6`}
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
              <h4 className="font-medium sm:text-lg">{t('Proliga hisobi')}</h4>
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
            className={`flex size-44 cursor-pointer flex-col justify-center gap-2 rounded-xl border border-primary bg-transparent p-4 transition-all sm:size-64 sm:p-6`}
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
              <h4 className="font-medium sm:text-lg">
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
