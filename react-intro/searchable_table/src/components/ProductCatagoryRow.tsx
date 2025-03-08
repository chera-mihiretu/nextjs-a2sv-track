import React from 'react'

interface Props {
    catagory: string;
}

const ProductCatagoryRow = ({catagory} : Props) => {
  return (
   <tr>
    <th colSpan={2}>
        {catagory}
    </th>
   </tr>
  )
}

export default ProductCatagoryRow
