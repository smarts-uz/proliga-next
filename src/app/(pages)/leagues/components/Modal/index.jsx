import Backdrop from '../../../../../components/Backdrop'
import Image from 'next/image'

const LeagueModal = ({ toggleModal }) => {
  return (
    <Backdrop onClick={() => toggleModal(false)}>
      <dialog
        className="fade-in flex lg:w-1/3 min-size-96 flex-col gap-4 overflow-y-auto rounded-2xl bg-white p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-neutral-700 pb-4">
          <h3 className="text-2xl font-semibold">Jamoa yarating</h3>
          <button onClick={() => toggleModal(false)}>
            <Image
              src="/icons/close.svg"
              className="filter-neutral-950"
              alt="close"
              width={24}
              height={24}
            />
          </button>
        </div>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Ism</label>
            <input
              type="text"
              id="team name"
              placeholder="Jamoangiz nomi"
              className="w-full rounded-lg border border-neutral-700 bg-transparent p-3 outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Taktika</label>
            <select
              name=""
              id=""
              className="w-full rounded-lg border border-neutral-700 bg-transparent p-3 outline-none"
            >
              <option selected value="">4-3-3</option>
              <option value="">4-4-2</option>
              <option value="">3-4-3</option>
              <option value="">5-3-2</option>
              <option value="">3-5-2</option>
            </select>
          </div>
          <button className='border rounded py-2 bg-black text-white hover:bg-opacity-80'>Saqlash</button>
        </form>
      </dialog>
    </Backdrop>
  )
}

export default LeagueModal
