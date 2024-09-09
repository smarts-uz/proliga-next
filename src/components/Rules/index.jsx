import Gutter from '../Gutter'
import Link from 'next/link'

export default function Rules() {
  return (
    <section className='bg-neutral-900'>
      <Gutter>
        <div className="flex flex-col py-6 text-white">
          <div className="block w-auto max-w-96 -skew-x-12 rounded-sm bg-primary px-16">
            <h3 className="text-2xl font-bold capitalize text-black">
              umumiy qoidalar
            </h3>
          </div>
          <ul className="list-inside list-decimal pt-4">
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </li>
            <li>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </li>
            <li>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </li>
            <li>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </li>
            <li>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </li>
          </ul>
          <Link
            href="/"
            className="mx-auto self-center rounded-md bg-green-600 px-10 py-1 uppercase transition-all hover:bg-green-700"
          >
            O&apos;yin boshlash
          </Link>
        </div>
      </Gutter>
    </section>
  )
}
