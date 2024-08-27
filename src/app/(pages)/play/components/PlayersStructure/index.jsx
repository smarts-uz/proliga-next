import Player from './Player'

const PlayersStructure = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 z-10 flex flex-col justify-between py-2 md:pb-12 md:pt-4">
      <div className="flex w-full justify-center">
        <Player />
      </div>
      <div className="mx-10 flex justify-around gap-1 md:mx-24 md:gap-8">
        <Player />
        <Player />
        <Player />
        <Player />
      </div>
      <div className="mx-8 flex justify-between gap-0 md:mx-24 md:gap-8">
        <Player />
        <Player />
        <Player />
        <Player />
      </div>
      <div className="mx-0 flex justify-evenly gap-0 md:mx-24 md:justify-around md:gap-8">
        <Player />
        <Player />
      </div>
    </div>
  )
}

export default PlayersStructure
