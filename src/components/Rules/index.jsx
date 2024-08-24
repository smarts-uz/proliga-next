import Gutter from "../Gutter"

export default function Rules() {
  return (
    <Gutter>
      <div className="text-white pt-[25px] pb-6">
        <div className="bg-primary md:w-1/3 w-auto pl-16">
          <h3 className="text-black capitalize text-2xl font-bold">umumiy qoidalar</h3>
        </div>
        {/* Список */}
        <ul className="list-decimal list-inside pt-[15px]">
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </li>
          <li>
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </li>
          <li>
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </li>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </li>
          <li>
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </li>
          <li>
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </li>
        </ul>
      </div>
    </Gutter>
  )
}