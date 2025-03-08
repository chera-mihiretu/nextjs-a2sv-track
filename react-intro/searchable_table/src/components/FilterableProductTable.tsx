import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import PRODUCTS from '../Products'

const FilterableProductTable = () => {
  return (
    <div>
      <SearchBar/>
      <ProductTable products={PRODUCTS}/>
    </div>
  )
}

export default FilterableProductTable
