import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-90 justify-around  flex py-4 px-12 ">
      <div className=" m-3">
        <a href="URL" className="text-white">Про нас</a>
      </div>
      <div className="border-r-4 border-black "></div>
      <div>
        <div className=" m-3">
          <a href="URL" className="text-white">политика</a>
        </div>
        <div className=" m-3">
          <a href="URL" className="text-white">конфиденциальности</a>
        </div>
      </div>
      <div className="border-r-4 border-black"></div>
      <div className="text-left m-3">
        <a href="URL" className="text-white">Пользовательское соглашение</a>
      </div>

    </footer>
  )
}

export default Footer
