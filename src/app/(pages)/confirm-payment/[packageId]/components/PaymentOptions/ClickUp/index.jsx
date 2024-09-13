import Image from 'next/image'
import { PAYMENTOPTIONS } from 'app/utils/paymentOptions.util'

const ClickUpPaymentOption = ({
  setPaymentOption,
  paymentOption,
  active,
  passive,
}) => {
  return (
    <div
      onClick={() => setPaymentOption(PAYMENTOPTIONS.CLICKUP)}
      className={`flex size-64 cursor-pointer flex-col justify-center gap-2 rounded-xl border bg-stone-950 p-6 transition-all ${paymentOption === PAYMENTOPTIONS.CLICKUP ? active : passive}`}
    >
      <Image
        src="/icons/click-up.svg"
        width={36}
        draggable={false}
        height={36}
        className="h-16 w-28 self-center"
        alt="click up"
      />
      <div className="w-full self-center text-center">
        <h4 className="text-lg font-medium">Click Up</h4>
        <p className="text-sm text-neutral-400">Click up orqali tolov qilish</p>
      </div>
    </div>
  )
}

export default ClickUpPaymentOption
