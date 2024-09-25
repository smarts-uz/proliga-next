import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

const CabinetHomeTab = () => {
  const { userAuth, userTable } = useSelector((store) => store.auth)
  const { t } = useTranslation()

  return (
    <section className="h-full w-full flex-1 rounded-xl bg-neutral-900 bg-opacity-90 p-4 lg:h-auto xl:p-6">
      <div className="flex gap-4">
        <div>
          {userAuth?.user?.email && (
            <span className="flex size-24 select-none items-center justify-center rounded-full bg-primary text-4xl font-bold uppercase text-black">
              {userAuth.user.email.slice(0, 1)}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <span className="flex gap-1">
            <p>{userTable?.name ?? t('Ism')}</p>
            <p>{userTable?.lastName ?? t('Familiya')}</p>
            <p>{userTable?.middleName ?? t('Sharif')}</p>
          </span>
          <span>{userTable?.email ?? t('Email')}</span>
          <span>{userTable?.phone ?? t('Telefon raqam')}</span>
        </div>
      </div>
      <div></div>
    </section>
  )
}

export default CabinetHomeTab
