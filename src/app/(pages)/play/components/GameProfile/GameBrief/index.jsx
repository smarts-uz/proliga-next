import { useSelector } from 'react-redux'

const GameBrief = () => {
  const { currentTeam } = useSelector((store) => store.currentTeam)
  const { currentCompetition } = useSelector((store) => store.competition)

  return (
    <section className="flex h-min w-full flex-col justify-between gap-6 rounded-2xl border border-primary border-opacity-50 bg-neutral-950 px-10 py-6 transition-all hover:border-opacity-100 md:w-2/5">
      <div className="flex flex-col gap-6 border-b border-neutral-700 pb-2">
        <div className="flex justify-between text-lg">
          <p className="text-neutral-100">Keyingi Tur</p>
          <p className="text-sm uppercase text-primary">2-Tur</p>
        </div>
        <div className="flex justify-between text-lg">
          <p className="text-neutral-100">Tugatish Muddati</p>
          <p className="text-sm uppercase text-primary">24-Avgust | 16:30</p>
        </div>
      </div>
      <div className="flex flex-col gap-6 border-b border-neutral-700 pb-2">
        <div className="flex justify-between text-lg">
          <p className="text-neutral-100">Tur</p>
          <p className="text-sm uppercase text-primary">1-Tur</p>
        </div>
        <div className="flex justify-between text-lg">
          <p className="text-neutral-100">Turdagi ochkolar</p>
          <p className="text-sm uppercase text-primary">0</p>
        </div>
      </div>
      <div className="flex flex-col gap-6 border-b border-neutral-700 pb-2">
        <div className="flex justify-between text-lg">
          <p className="text-neutral-100">Chempionat</p>
          <p className="text-sm uppercase text-primary">
            {currentTeam?.competition_id?.title}
          </p>
        </div>
        <div className="flex justify-between text-lg">
          <p className="text-neutral-100">Turdagi o&apos;rin</p>
          <p className="text-sm uppercase text-primary">0</p>
        </div>
      </div>
      <div className="flex flex-col gap-6 pb-2">
        <div className="flex justify-between text-lg">
          <p className="text-neutral-100">Jamoa narxi</p>
          <p className="text-sm uppercase text-primary">
            {/* {currentTeam?.team_price ?? 0} */}
          </p>
        </div>
        <div className="flex justify-between text-lg">
          <p className="text-neutral-100">Balans</p>
          <p className="text-sm uppercase text-primary">
            {/* {currentTeam?.balance} */}
          </p>
        </div>
      </div>
    </section>
  )
}

export default GameBrief
