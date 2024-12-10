import Image from 'next/image'

const StadiumSpinner = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 mx-auto flex h-full items-center justify-center self-center rounded-md pb-12 xs:pb-16">
      <Image
        src="/icons/loading.svg"
        width={24}
        height={24}
        alt="loading"
        className="mx-auto size-10 animate-spin sm:size-12"
      />
    </div>
  )
}

export default StadiumSpinner
