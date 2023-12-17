function Panel({ stock, trie }) {
  const stockOnly = (item) => {
    stock(item);
  };

  const sortBy = (value) => {
    trie(value);
  };

  return (
    <div className=" px-8 bg-cyan-100 ">
      <div className="mt-2 basis-1/4">
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="bg-white p-6 w-64 h-96">
            <fieldset>
              <legend className="sr-only">Filtres</legend>
              <div
                className="text-base font-medium text-gray-900"
                aria-hidden="true"
              >
                Filtres
              </div>
              <div className="mt-4 space-y-4">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      onChange={(e) => stockOnly(e.target.checked)}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="comments"
                      className="font-medium text-cyan-700"
                    >
                      In stock only
                    </label>
                  </div>
                </div>
              </div>
              <label
                htmlFor="sortBy"
                className="block text-sm mt-2 font-medium text-cyan-700"
              >
                Sort by
              </label>
              <select
                id="sortBy"
                name="sortBy"
                autoComplete="country-name"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                onChange={(e) => sortBy(e.target.value)}
              >   <option value='all'>All</option>
                <option value='year'>Year</option>
                <option value='pitchhtmlfork'>PitchhtmlFork</option>
              </select>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Panel;
