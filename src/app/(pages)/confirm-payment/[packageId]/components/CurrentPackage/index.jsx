const CurrentPackage = ({ currentPackage }) => {
  const getPackageText = (currentPackage) => {
    if (currentPackage.type === 'balance') return 'Balansni'
    if (currentPackage.type === 'transfer') return 'Transferni'
    if (currentPackage.type === 'maxClubMembers')
      return "Maksimum klub oyi'nchilarini"
  }
  return (
    <div className="flex items-center gap-6 h-24 rounded-md bg-neutral-800 p-6">
      <span className="flex size-12 items-center justify-center rounded-full bg-black font-bold text-neutral-300">
        1
      </span>
      <div className="flex w-full items-center justify-between">
        <div className="space-x-2 text-xl">
          {getPackageText(currentPackage)}
          <span className="text-2xl font-bold">
            {' ' + currentPackage.amount}
          </span>{' '}
          ga oshirish
        </div>
        <div className="text-2xl font-medium text-neutral-100">
          <span className="text-3xl font-bold">
            {currentPackage.price + ' '}
          </span>
          so&apos;m
        </div>
      </div>
    </div>
  )
}

export default CurrentPackage
