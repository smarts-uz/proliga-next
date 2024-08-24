import Gutter from '../Gutter'
import Link  from 'next/link'

export default function Rules() {
  return (
    <Gutter>
      <div className="flex flex-col pb-6 pt-[25px] text-white">
        <div className="w-auto bg-primary pl-16 md:w-1/3">
          <h3 className="text-2xl font-bold capitalize text-black">
            umumiy qoidalar
          </h3>
        </div>
        <ul className="list-inside list-decimal pt-[15px]">
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </li>
          <li>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </li>
          <li>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </li>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </li>
          <li>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </li>
          <li>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </li>
        </ul>
        <Link href="/" className="mx-auto self-center rounded-2xl bg-green-400 px-8 py-1 uppercase">
          Oyin boshlash
        </Link>
      </div>
    </Gutter>
  )
}
