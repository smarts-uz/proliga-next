import Image from 'next/image'
import Backdrop from '../../Backdrop'
import { useState } from 'react'

const Article = ({ item }) => {
  console.log(item.news)

  const [openModal, setOpenModal] = useState(false)
  const toggleModal = () => {
    setOpenModal(!openModal)
  }
  return (
    <div>
      <div
        onClick={toggleModal}
        key={item}
        className="p-4 hover:cursor-pointer"
      >
        <div className="flex text-xs text-gray-400">
          <p className="w-72 max-w-xs">{item.date}</p>
          <p className="me-2">
            <Image src="/icons/eye.svg" width={20} height={20} alt="eye" />
          </p>
          <p className="pt-0.5">{item.views}</p>
        </div>
        <h5 className="w-full text-sm">{item.title}</h5>
        <p className="text-xs text-yellow-300">{`yangiliklarni ko'rsatish`}</p>
        <hr />
      </div>
      {openModal ? (
        <Backdrop onClick={toggleModal}>
          <div className="absolute max-w-[460px] rounded-md bg-white py-2 shadow-lg">
            <div className="p-4">
              <div className="flex text-xs text-gray-400">
                <p className="w-72 max-w-xs">{item.date}</p>
                <p className="me-2">
                  <Image
                    src="/icons/eye.svg"
                    width={20}
                    height={20}
                    alt="eye"
                  />
                </p>
                <p className="pt-0.5">{item.views}</p>
              </div>
              {/* <h5 className="text-md w-full">asdadadsadadaadsa</h5> */}
              <div dangerouslySetInnerHTML={{ __html: item.news }} />
            </div>
            <div className="flex items-center justify-between border-t border-gray-300 px-4 pt-2">
              <button
                onClick={toggleModal}
                type="button"
                className="h-8 rounded-md bg-gray-700 px-2 text-sm text-white"
              >
                Close
              </button>
            </div>
          </div>
        </Backdrop>
      ) : (
        ''
      )}
    </div>
  )
}

export default Article
