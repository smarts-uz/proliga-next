import Image from 'next/image'

const TransferTablePagination = ({ table }) => {
  return (
    <section className="flex gap-2">
      <PaginationButton
        onClick={() => table.setPageIndex(0)}
        disabled={!table.getCanPreviousPage()}
        src={'arrow-double.svg'}
        imgClassName={'rotate-180'}
      />
      <PaginationButton
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
        src="arrow-down.svg"
        imgClassName={'rotate-90'}
      />
      <PaginationButton
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
        src={'arrow-down.svg'}
        imgClassName={'-rotate-90'}
      />
      <PaginationButton
        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        disabled={!table.getCanNextPage()}
        src={'arrow-double.svg'}
      />
    </section>
  )
}

const PaginationButton = ({
  onClick,
  disabled,
  className,
  src,
  imgClassName,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={'rounded-sm border p-1 disabled:opacity-75 ' + className}
    >
      <Image
        src={'./icons/' + src}
        alt="arrow"
        className={'h-full w-full select-none ' + imgClassName}
        width={24}
        height={24}
      />
    </button>
  )
}

export default TransferTablePagination
