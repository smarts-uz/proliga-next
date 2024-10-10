import Image from 'next/image'

const StadiumSpinner = () => {
  return (
    <div className="absolute -top-10 bottom-0 left-0 right-0 mx-auto flex justify-center self-center xs:-top-12 md:-top-[5.8rem] lg:-top-[4.2rem]">
      <Image
        src="/icons/loading.svg"
        width={24}
        height={24}
        alt="loading"
        className="mx-auto size-10 animate-spin"
      />
    </div>
  )
}

export default StadiumSpinner
