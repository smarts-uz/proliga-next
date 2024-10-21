import ArticleModal from '../Modal'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { LANGUAGE } from 'app/utils/languages.util'

const Article = ({ item }) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const { lang } = useSelector((store) => store.systemLanguage)

  const date = new Date(item.created_at)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const { t } = useTranslation()
  return (
    <>
      <article
        onClick={() => setModalOpen(true)}
        className="group w-full py-2 hover:cursor-pointer"
      >
        <div className="flex items-center text-xs text-neutral-400">
          <p className="mr-auto max-w-xs">
            {day + '/'}
            {month + '/'}
            {year}
          </p>
        </div>
        <h5 className="w-full break-words text-sm text-neutral-300 hover:underline">
          {lang === LANGUAGE.uz ? item?.name : item?.name_ru}
        </h5>
        <p className="mt-2 text-end text-sm capitalize text-yellow-600 group-hover:text-primary">
          {t("Yangiliklarni ko'rsatish")}
        </p>
        <hr />
      </article>
      <ArticleModal
        toggleModal={() => setModalOpen(!isModalOpen)}
        item={item}
        date={day + '/' + month + '/' + year}
        isModalOpen={isModalOpen}
      />
    </>
  )
}

export default Article
