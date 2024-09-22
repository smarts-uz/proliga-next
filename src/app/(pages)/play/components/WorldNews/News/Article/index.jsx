import Image from 'next/image'
import { useState } from 'react'
import ArticleModal from '../Modal'
import { useTranslation } from 'react-i18next'
const Article = ({ item }) => {
  const [isModalOpen, setModalOpen] = useState(false)

  const toggleModal = () => {
    if (isModalOpen) {
      setModalOpen(false)
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'auto'
      }
    } else {
      setModalOpen(true)
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'hidden'
      }
    }
  }

  const date = new Date(item.created_at)
  const day = date.getDate()
  const month = date.toLocaleString('default', { month: 'long' })
  const year = date.getFullYear()
  const { t } = useTranslation()
  return (
    <>
      <article
        onClick={toggleModal}
        className="group w-full p-4 hover:cursor-pointer"
      >
        <div className="flex items-center text-xs text-neutral-400">
          <p className="mr-auto max-w-xs">
            {day + ' '}
            {month + ' '}
            {year}
          </p>
        </div>
        <h5 className="w-full text-sm text-neutral-300 hover:underline">
          {item.name}
          {item.name}
          {item.name}
          {item.name}
          {item.name}
        </h5>
        <p className="mt-2 text-end text-sm capitalize text-yellow-600 group-hover:text-primary">
        {t("Yangiliklarni ko'rsatish")}
        </p>
        <hr />
      </article>
      {isModalOpen && (
        <ArticleModal
          toggleModal={toggleModal}
          item={item}
          date={day + ' ' + month + ' ' + year}
        />
      )}
    </>
  )
}

export default Article
