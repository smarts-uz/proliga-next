'use client'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import Image from 'next/image'

const CabinetHomeTab = ({ setSettingsTab }) => {
  const { userAuth, userTable, isLoading } = useSelector((store) => store.auth)
  const { t } = useTranslation()

  const date = new Date(userTable?.birth_date)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex h-full w-full flex-1 flex-col gap-4 rounded-xl bg-neutral-900 p-4 lg:h-auto xl:p-6"
    >
      <div className="flex items-center gap-4">
        {userAuth?.user?.email && (
          <div className="flex size-24 select-none items-center justify-center rounded-full bg-primary text-4xl font-bold uppercase text-black">
            {userAuth.user.email.slice(0, 1)}
          </div>
        )}
        <div className="flex flex-col justify-center gap-2">
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
        <h3 className="text-xl font-medium">Qisqacha Malumot:</h3>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
          <div className="flex gap-2 rounded border border-neutral-500 bg-neutral-800 p-2">
            <div className="flex gap-1 capitalize">
              <Image
                src="/icons/call.svg"
                className="filter-neutral-50 size-6"
                alt="phone"
                width={24}
                height={24}
              />
              <p>{t('Telefon raqam')} :</p>
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
                className="filter-neutral-50 size-6"
              />
              <p>{t("Tug'ilgan kuni")} :</p>
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
                className="filter-neutral-50 size-6"
              />
              <p>{t('Jins')} :</p>
            </div>
            <p>{userTable.gender ?? 'Belgilanmagan'}</p>
          </div>
        </div>
      </section>
      <section>
        <h3 className="text-xl font-medium">Bio:</h3>
        <div className="scroll-y-auto h-40 rounded border border-neutral-500 bg-neutral-800 p-2">
          {userTable?.bio ? userTable?.bio : t("Ma'lumot yo'q")}
        </div>
      </section>
      <section className="flex flex-wrap gap-2">
        <div
          className={`flex size-64 cursor-pointer flex-col justify-center gap-2 rounded-xl border bg-stone-950 p-6 transition-all`}
        >
          <Image
            src="/icons/wallet.svg"
            draggable={false}
            width={36}
            height={36}
            className="filter-neutral-50 size-16 self-center"
            alt="wallet"
          />
          <div className="w-full self-center text-center">
            <h4 className="text-lg font-medium">{t('Proliga hisobi')}</h4>
            <p className="text-sm text-neutral-400">
              {t('Hisobda')}:{' '}
              <span className="font-bold text-neutral-50">4000 </span>
              {t("so'm")}
            </p>
          </div>
          <button className="rounded border py-1 text-sm transition-all hover:bg-primary hover:text-neutral-900">
            {t('Hisobni toldirish')}
          </button>
        </div>
        <div
          className={`flex size-64 cursor-pointer flex-col justify-center gap-2 rounded-xl border bg-stone-950 p-6 transition-all`}
        >
          <Image
            src="/icons/call.svg"
            draggable={false}
            width={36}
            height={36}
            className="filter-neutral-50 size-16 self-center"
            alt="wallet"
          />
          <div className="w-full self-center text-center">
            <h4 className="text-lg font-medium">
              {t('Telefon raqam tasdiqlash')}
            </h4>
          </div>
          <button className="rounded border py-1 text-sm transition-all hover:bg-primary hover:text-neutral-900">
            {t('Tasdiqlash')}
          </button>
        </div>
      </section>
    </motion.section>
  )
}

export default CabinetHomeTab
