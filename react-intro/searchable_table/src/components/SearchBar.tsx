
const SearchBar = () => {
  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center">
        <input type="checkbox" className="mr-2 leading-tight" />
        <span className="text-gray-700">Only show products in stock</span>
      </div>
    </form>
  )
}

export default SearchBar
