import Player from '../Player'

const PlayersStructure = () => {
  return (
    // 4-4-2
    <div className="absolute bottom-0 left-0 right-0 top-0 z-10 flex flex-col justify-between pb-12 pt-4">
      <div className="flex w-full justify-center">
        <Player />
      </div>
      <div className="mx-24 flex justify-center gap-8">
        <Player />
        <Player />
        <Player />
        <Player />
      </div>
      <div className="mx-24 flex justify-center gap-8">
        <Player />
        <Player />
        <Player />
        <Player />
      </div>
      <div className="mx-24 flex justify-around gap-8">
        <Player />
        <Player />
      </div>
    </div>
  )
}

export default PlayersStructure
