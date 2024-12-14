import { useTranslation } from 'react-i18next'

const AuthTabs = ({ tabs, setCurrentTab, loginStyles, registerStyles }) => {
  const { t } = useTranslation()

  return (
    <div className="flex rounded bg-neutral-900 p-1">
      <button
        className={`flex-1 select-none rounded py-1.5 text-sm font-medium capitalize transition-all ${loginStyles}`}
        onClick={() => setCurrentTab(tabs.login)}
      >
        {t('Tizimga kirish_1')}
      </button>
      <button
        className={`flex-1 select-none rounded py-1.5 text-sm font-medium transition-all ${registerStyles}`}
        onClick={() => setCurrentTab(tabs.signup)}
      >
        {t("Ro'yxatdan o'tish")}
      </button>
    </div>
  )
}

export default AuthTabs
