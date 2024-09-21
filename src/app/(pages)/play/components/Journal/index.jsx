import Gutter from '../../../../../components/Gutter'
import { useTranslation } from 'react-i18next'
import TopTeams from '../TopTeams'

const Journal = () => {
  const { t } = useTranslation()

  return (
    <Gutter>
      <div className="mt-4 flex min-h-[36rem] w-full gap-4 text-sm md:text-base">
        <section className="flex w-full flex-col rounded-2xl bg-black p-6 text-neutral-300 md:w-2/3">
          <div className="">
            {/* {data.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 border-b border-neutral-700 py-2 text-neutral-200"
              >
                <p>{item.date}</p>
                <p>{item.text}</p>
              </div>
            ))} */}
          </div>
          <div className="flex items-center justify-between py-4">
            <button className="rounded border px-4 py-1 capitalize text-white hover:underline">
              {t('Oldigisi')}
            </button>
            <button className="rounded border px-4 py-1 capitalize text-white hover:underline">
              {t('Keyingisi')}
            </button>
          </div>
        </section>
        <TopTeams />
      </div>
    </Gutter>
  )
}

export default Journal
