import Image from 'next/image'

const TeamMaxTransfers = () => {
  return (
    <div>
      <header className="group flex cursor-pointer text-neutral-400 transition-all hover:text-neutral-50 hover:underline">
        <h3
          title="Maksimum sotib olish mumkin bolgan o'yinchilar"
          className="gap-1 text-sm"
        >
          transferlar
        </h3>
        <Image
          src="/icons/arrow-bold-up.svg"
          alt="arrow"
          width={16}
          height={16}
          className="filter-neutral-400 group-hover:filter-neutral-50 translate-x-0 rotate-45 transition-all group-hover:translate-x-1"
        />
      </header>
      <p className="cursor-pointer text-4xl font-bold">2/2</p>
    </div>
  )
}

export default TeamMaxTransfers
