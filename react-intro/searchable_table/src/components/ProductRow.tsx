import React from 'react'
import Product from './ProductType'


interface Props {
  product: Product
}


const ProductRow = ({product} : Props) => {
 
    
  const name = product.stocked ? product.name : <span style={{color: 'red'}}>{product.name}</span>;

  return (
    <tr className="transition-colors ease-in-out duration-300 hover:bg-blue-100">
      <td className="py-3 px-6 text-left text-xs font-medium tracking-wider">
      {name}
      </td>
      <td className="py-3 px-6 text-left text-xs font-medium  tracking-wider">
      {product.price}
      </td>
    </tr>
  )
}

export default ProductRow
