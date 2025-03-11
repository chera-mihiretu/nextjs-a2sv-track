import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import PRODUCTS from '../Products'

const FilterableProductTable = () => {
  const [filterText, setFilterText] = React.useState('')
  const [inStockOnly, setInStockOnly] = React.useState(false)

  

  return (
    <div>
      <SearchBar inStock={inStockOnly} filterText={filterText} onFilterTextChange={setFilterText} onInStockOnlyChange={setInStockOnly}/>
      <ProductTable products={PRODUCTS} inStock={inStockOnly} filterText={filterText}/>
    </div>
  )
}

export default FilterableProductTable
