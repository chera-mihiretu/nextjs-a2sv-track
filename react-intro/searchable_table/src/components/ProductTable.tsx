import React from 'react'
import ProductCatagoryRow from './ProductCatagoryRow'
import Product from './ProductType';
import ProductRow from './ProductRow';

interface Props {
  products: Product[]
  inStock : boolean
  filterText : string
}

const ProductTable = ({products, inStock, filterText} : Props) => {
  let row : React.JSX.Element[] = [];
  let lastCatagory : string = '';

  products.sort((a, b) => a.category.localeCompare(b.category));

  products.forEach(element  => {
    if (inStock && !element.stocked) 
      return;
    
    if (element.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) 
      return;
    if (lastCatagory !== element.category) {
      row.push(<ProductCatagoryRow catagory={element.category} key={element.category}/>)
    }
    row.push(<ProductRow product={element} key={element.name}/>)
    lastCatagory = element.category;
  });
  return (
    <div className="overflow-x-auto shadow-lg rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gradient-to-r from-blue-500 to-green-500">
          <tr>
            <th className="py-3 px-6 text-left text-xs font-medium text-white uppercase tracking-wider">Name</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-white uppercase tracking-wider">Price</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {row}
        </tbody>
      </table>
    </div>
  )
}

export default ProductTable
