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
      : ' border-solid border-2 border-primary'

  const setSlide = () => {
    handleClick(currentIndex)
    setImageAnimation('fade-in')
  }
  return (
    <span
      key={image.url}
      className={`size-4 cursor-pointer rounded-full border-primary ${style}`}
      onClick={() => setSlide()}
    ></span>
  )
}

export default SliderPin
