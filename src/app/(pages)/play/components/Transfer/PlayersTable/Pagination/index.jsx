import Image from 'next/image'

const TransferTablePagination = ({ table }) => {
  const currentIndex = table.getState().pagination.pageIndex

  return (
    <section className="mt-4 flex items-center justify-center gap-2 overflow-x-auto">
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
      {Array.from({ length: 3 }, (_, i) => i + currentIndex - 1).map(
        (page) =>
          page !== -1 &&
          page < table.getPageCount() && (
            <button
              key={page}
              onClick={() => table.setPageIndex(page)}
              className={
                'block size-9 rounded-sm border p-1 ' +
                (table.getState().pagination.pageIndex === page
                  ? 'bg-primary text-black'
                  : 'bg-transparent')
              }
            >
              {page + 1}
            </button>
          )
      )}
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
      className={
        'block size-9 rounded-sm border p-1 disabled:opacity-75 ' + className
      }
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
