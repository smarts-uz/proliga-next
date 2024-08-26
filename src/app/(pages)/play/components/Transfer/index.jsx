import Gutter from '../../../../../components/Gutter'
import Image from 'next/image'
import PlayersStructure from '../PlayersStructure'
import PlayersTable from './PlayersTable'
import TransferTable from './Table'

const Transfer = () => {
  return (
    <Gutter>
      <main className="flex flex-col justify-between gap-4 md:flex-row">
        <div className="flex h-full w-3/5 flex-col">
          <Select />
          <div className="relative h-full w-full md:w-full">
            <Image
              src="/images/stadium.png"
              alt="stadium"
              width={700}
              height={600}
              className="w-full rounded-sm"
            />
            <PlayersStructure />
          </div>
          <Forms />
        </div>
        <TransferTable />
        {/* <PlayersTable /> */}
      </main>
    </Gutter>
  )
}

const Select = () => {
  return (
    <div className="mb-2 flex flex-col text-neutral-200">
      <label htmlFor="formation" className="text-lg font-bold text-neutral-100">
        Taktika
      </label>
      <select
        name="formation"
        id="formation"
        className="h-12 w-48 -skew-x-12 rounded-lg border border-neutral-900 bg-neutral-950 bg-transparent p-2 font-semibold text-neutral-200 outline-none"
      >
        <option
          className="bg-neutral-950 checked:bg-neutral-900"
          selected
          value="4-3-3"
        >
          4-3-3
        </option>
        <option className="bg-neutral-950 checked:bg-neutral-800" value="4-4-2">
          4-4-2
        </option>
        <option className="bg-neutral-950 checked:bg-neutral-700" value="3-4-3">
          3-4-3
        </option>
        <option className="bg-neutral-950 checked:bg-neutral-700" value="5-3-2">
          5-3-2
        </option>
        <option className="bg-neutral-950 checked:bg-neutral-700" value="3-5-2">
          3-5-2
        </option>
      </select>
    </div>
  )
}

const Forms = () => {
  return (
    <div className="h-18 flex justify-between text-black">
      <div className="flex flex-col gap-1 text-neutral-200">
        <label htmlFor="kaptain" className="text-lg font-semibold">
          Jamoa nomi:
        </label>
        <input
          type="text"
          placeholder="Uzbek Komanda"
          className="h-10 -skew-x-12 rounded-sm border border-black bg-neutral-200 px-2 text-black"
        />
      </div>
      <div className="flex flex-col gap-1 text-neutral-200">
        <label htmlFor="kaptain" className="text-lg font-semibold">
          Kapitan
        </label>
        <input
          placeholder="kapitan"
          type="text"
          className="h-10 -skew-x-12 rounded-sm border border-neutral-900 bg-neutral-200 px-2 text-black"
        />
      </div>
      <button className="mt-4 h-10 -skew-x-12 self-end rounded-sm bg-black px-10 text-lg text-white hover:bg-opacity-75">
        Saqlash
      </button>
    </div>
  )
}

export default Transfer
