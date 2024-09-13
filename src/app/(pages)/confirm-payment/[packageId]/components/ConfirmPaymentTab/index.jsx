const ConfirmPaymentTab = ({ currentPackage }) => {
  return (
    <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-md bg-gradient-to-l from-neutral-800 to-stone-900 p-4 md:mt-24 md:h-24 md:flex-row md:items-center md:p-6">
      <div className="space-x-1 text-base font-medium md:text-lg">
        <p className="inline-block">Ummumiy to&apos;lov miqdori:</p>
        <span className="inline-block text-xl font-bold md:text-2xl">
          {currentPackage.price}
        </span>
        <p className="inline-block font-medium">so&apos;m</p>
      </div>
      <div className="flex items-center gap-1 self-end font-medium md:self-auto">
        <button className="h-10 w-32 rounded border border-neutral-300 bg-neutral-950 text-neutral-300 transition-all hover:border-neutral-100 hover:bg-opacity-75 hover:text-neutral-100">
          Qaytish
        </button>
        <button className="h-10 w-32 rounded border border-primary bg-neutral-950 text-neutral-50 transition-all hover:bg-opacity-75 hover:text-primary">
          Tolash
        </button>
      </div>
    </div>
  )
}

export default ConfirmPaymentTab
