const ChangeCaptainForm = () => {
  return (
    <form className="mt-2 flex justify-between text-black">
      <div className="flex flex-col gap-1 text-neutral-200">
        <select
          name="formation"
          id="formation"
          className="w-48 -skew-x-12 rounded-sm border border-neutral-900 bg-neutral-950 p-2 font-semibold text-neutral-200 outline-none"
        >
          <option value="" defaultChecked disabled>
            Kapitan
          </option>
          <option
            className="bg-neutral-950 checked:bg-neutral-900"
            value="Gaisca Garcia"
          >
            Gaisca Garcia
          </option>
          <option
            className="bg-neutral-950 checked:bg-neutral-800"
            value="Unai Simon"
          >
            Unai Simon
          </option>
          <option
            className="bg-neutral-950 checked:bg-neutral-700"
            value="Danny Vivian"
          >
            Danny Vivian
          </option>
          <option
            className="bg-neutral-950 checked:bg-neutral-700"
            value="Antoni Gorosabel"
          >
            Antoni Gorosabel
          </option>
          <option
            className="bg-neutral-950 checked:bg-neutral-700"
            value="Iker Muniain"
          >
            Iker Muniain
          </option>
        </select>
      </div>
      <button
        type="submit"
        onClick={(e) => e.preventDefault()}
        className="-skew-x-12 rounded-sm bg-black px-10 text-lg text-white transition-all hover:bg-primary hover:bg-opacity-75 hover:text-black"
      >
        Saqlash
      </button>
    </form>
  )
}

export default ChangeCaptainForm
