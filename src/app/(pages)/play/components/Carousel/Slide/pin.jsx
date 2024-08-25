'use client'

const SliderPin = ({
  image,
  index,
  currentIndex,
  setImageAnimation,
  handleClick,
}) => {
  const style =
    currentIndex === index
      ? 'bg-primary hover:bg-opacity-100'
      : 'bg-opacity-50 hover:bg-opacity-75'

  const setSlide = () => {
    handleClick(currentIndex)
    setImageAnimation('fade-in')
  }
  return (
    <span
      key={image.url}
      className={`size-4 cursor-pointer rounded-full bg-primary shadow-sm shadow-gray-700 ${style}`}
      onClick={() => setSlide()}
    ></span>
  )
}

export default SliderPin
