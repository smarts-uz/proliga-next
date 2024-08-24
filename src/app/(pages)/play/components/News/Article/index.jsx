import Image from 'next/image'
import { useState } from 'react'
import ArticleModal from '../Modal'

const Article = ({ item }) => {
  const [openModal, setOpenModal] = useState(false)
  const toggleModal = () => {
    setOpenModal(!openModal)
  }
  return (
    <>
      <article onClick={toggleModal} className="group p-4 hover:cursor-pointer">
        <div className="flex items-center text-xs text-neutral-400">
          <p className="mr-auto max-w-xs">{item.date}</p>
          <Image
            src="/icons/eye.svg"
            width={20}
            height={20}
            alt="eye"
            className="filter-neutral-400"
          />
          <p className="ml-1">{item.views}</p>
        </div>
        <h5 className="w-full text-sm text-neutral-300 hover:underline">
          {item.title}
        </h5>
        <p className="mt-2 text-end text-sm capitalize text-yellow-600 group-hover:text-primary">
          yangiliklarni ko&apos;rsatish
        </p>
        <hr />
      </article>
      {openModal && <ArticleModal toggleModal={toggleModal} item={item} />}
    </>
  )
}

export default Article
