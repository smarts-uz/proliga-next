import Gutter from '../../../../../components/Gutter'

const Journal = () => {
  return (
    <Gutter>
      <div className='flex gap-4'>
        <section className="flex w-2/3 flex-col rounded-2xl bg-black p-6 text-neutral-300">
          <div className="">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 border-b border-neutral-700 py-2 text-neutral-200"
              >
                <p>{item.date}</p>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between py-4">
            <button className="capitalize text-white hover:underline">
              Oldigisi
            </button>
            <div className="flex gap-2">
              <button className="rounded border bg-white px-2 py-1 text-black">
                1
              </button>
              <button className="rounded border px-2 py-1">2</button>
              <button className="rounded border px-2 py-1">3</button>
            </div>
            <button className="capitalize text-white hover:underline">
              Keyingisi
            </button>
          </div>
        </section>
        <div className="flex h-min w-1/3 flex-col gap-8">
          <div className="w-full rounded-xl bg-black p-8 text-neutral-100">
            <h3 className="text-xl font-bold">ENG KUCHLI TOP 3 - JAMOALAR</h3>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="size-20 rounded-xl bg-white 2xl:size-28"></div>
              <div className="size-20 rounded-xl bg-white 2xl:size-28"></div>
              <div className="size-20 rounded-xl bg-white 2xl:size-28"></div>
            </div>
          </div>
          <div className="w-full rounded-xl bg-black p-8 text-neutral-100">
            <h3 className="text-xl font-bold">
              ENG KUCHLI TOP 3 - Futbolchilar
            </h3>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="size-20 rounded-xl bg-white 2xl:size-28"></div>
              <div className="size-20 rounded-xl bg-white 2xl:size-28"></div>
              <div className="size-20 rounded-xl bg-white 2xl:size-28"></div>
            </div>
          </div>
        </div>
      </div>
    </Gutter>
  )
}

const data = [
  {
    date: '16.09.24 | 16:24 da',
    text: '“Real” futbolchisi Mbappe sotib olindi',
  },
  {
    date: '16.09.24 | 16:24 da',
    text: '“Real” futbolchisi Mbappe sotib olindi',
  },
  {
    date: '16.09.24 | 16:24 da',
    text: '“Real” futbolchisi Mbappe sotib olindi',
  },
  {
    date: '16.09.24 | 16:24 da',
    text: '“Real” futbolchisi Mbappe sotib olindi',
  },
  {
    date: '16.09.24 | 16:24 da',
    text: '“Real” futbolchisi Mbappe sotib olindi',
  },
  {
    date: '16.09.24 | 16:24 da',
    text: '“Real” futbolchisi Mbappe sotib olindi',
  },
  {
    date: '16.09.24 | 16:24 da',
    text: '“Real” futbolchisi Mbappe sotib olindi',
  },
  {
    date: '16.09.24 | 16:24 da',
    text: '“Real” futbolchisi Mbappe sotib olindi',
  },
  {
    date: '16.09.24 | 16:24 da',
    text: '“Real” futbolchisi Mbappe sotib olindi',
  },
  {
    date: '16.09.24 | 16:24 da',
    text: '“Real” futbolchisi Mbappe sotib olindi',
  },
  {
    date: '16.09.24 | 16:24 da',
    text: '“Real” futbolchisi Mbappe sotib olindi',
  },
]

export default Journal
