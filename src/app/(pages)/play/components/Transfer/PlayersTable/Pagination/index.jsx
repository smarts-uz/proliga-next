import Image from 'next/image'

const TransferTablePagination = ({ table }) => {
  return (
    <>
      <div className="mb-2 mt-8">
        Page {table.getState().pagination.pageIndex + 1} of{' '}
        {table.getPageCount()}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="rounded-sm border px-2 py-1"
        >
          {'<'}
        </button>
        <button
          className="rounded-sm border px-2 py-1"
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        >
          {'>'}
        </button>
      </div>
    </>
  )
}

export default TransferTablePagination
