import Image from 'next/image'

const PaymentOptions = () => {
  return (
    <div className="mt-4">
      <div className="flex w-full items-center gap-6 p-6">
        <span className="flex size-12 items-center justify-center rounded-full bg-neutral-700 font-bold text-neutral-300">
          2
        </span>
        <h3 className="text-xl font-medium">
          Qanday qilib tolov qilmoqchisiz?
        </h3>
      </div>
      <section className="flex gap-4 md:gap-6">
        <div className="flex size-64 cursor-pointer flex-col justify-center gap-2 rounded-xl border border-primary bg-stone-950 p-6">
          <Image
            src="/icons/wallet.svg"
            width={36}
            height={36}
            className="filter-neutral-50 size-16 self-center"
            alt="wallet"
          />
          <div className="w-full self-center text-center">
            <h4 className="text-lg font-medium">Proliga hisobi</h4>
            <p className="text-sm text-neutral-400">
              Hisobda: <span className="font-bold text-neutral-50">4000 </span>
              so&apos;m
            </p>
          </div>
          <button className="py-1 rounded border text-sm transition-all hover:bg-primary hover:text-neutral-900">
            Hisobni toldirish
          </button>
        </div>
        <div className="flex size-64 cursor-pointer flex-col justify-center gap-2 rounded-xl border border-neutral-600 bg-stone-950 p-6">
          <Image
            src="/icons/click-up.svg"
            width={36}
            height={36}
            className="h-16 w-28 self-center"
            alt="click up"
          />
          <div className="w-full self-center text-center">
            <h4 className="text-lg font-medium">Click Up</h4>
            <p className="text-sm text-neutral-400">
              Click up orqali tolov qilish
            </p>
          </div>
        </div>
        <div className="flex size-64 cursor-pointer flex-col justify-center gap-2 rounded-xl border border-neutral-600 bg-stone-950 p-6">
          <Image
            src="/icons/payme.svg"
            width={36}
            height={36}
            className="h-16 w-28 self-center"
            alt="payme"
          />
          <div className="w-full self-center text-center">
            <h4 className="text-lg font-medium">Payme</h4>
            <p className="text-sm text-neutral-400">
              Payme orqali tolov qilish
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PaymentOptions
