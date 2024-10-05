import Image from 'next/image'

const PaginationButton = ({
  onClick,
  disabled,
  className,
  src,
  imgClassName,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={
        'block size-6 rounded-sm border p-1 hover:bg-neutral-800 disabled:opacity-75 disabled:hover:bg-transparent md:size-8 ' +
        className
      }
    >
      <Image
        src={'/icons/' + src}
        alt="arrow"
        className={'h-full w-full select-none ' + imgClassName}
        width={24}
        height={24}
      />
    </button>
  )
}

export default PaginationButton
