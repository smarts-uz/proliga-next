import { useTranslation } from 'react-i18next'

const NotificationArticle = ({ notification, handleNotificationClick }) => {
  const { t } = useTranslation()
  const date = new Date(notification?.created_at ?? new Date())
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  return (
    <div
      onClick={() => handleNotificationClick(notification)}
      className="flex items-center justify-between rounded-lg bg-neutral-900 p-2 transition-all duration-300 ease-in hover:bg-neutral-700"
    >
      <div className="max-w-[80%]">
        <p className="line-clamp-2 break-words text-sm font-thin text-neutral-100">
          {notification?.name}
        </p>
        <p className="text-xs text-neutral-300">
          {day + '/'}
          {month + '/'}
          {year}
        </p>
      </div>
      <button className="w-auto rounded-md border border-primary p-1 text-xs font-bold transition-all hover:bg-primary hover:text-black">
        {t("Ko'rish")}
      </button>
    </div>
  )
}

export default NotificationArticle
