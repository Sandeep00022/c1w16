import React from "react"
import data from '../data.json'
import CartButton from "./CartButton"




const GroceryDetails = ()=>{
console.log(data)
// {
//     "id": 10,
//     "title": "Amul Pure Ghee 1 L (Pouch)",
//     "imgURL":
//       "https://www.jiomart.com/images/product/150x150/490010164/amul-pure-ghee-1-l-pouch-product-images-o490010164-p490010164-0-202203151915.jpg",
//     "mrp": "₹ 485.00",
//     "sellingPrice": "₹ 460.00",
//     "discount": "18%"
//   }


    return(
        <>
        <h1>Groceries</h1>
        <div className="container">
            {/* map through the data and display the cards */}

            {data.map((item)=>{

return(
    <div>
 <img src={item.imgURL} />

<h5>{item.title}</h5>
<div>
    <h4>{item.sellingPrice}</h4>

    <h6>{item.mrp}</h6>
    <h5>{item.discount}</h5></div>
    <CartButton/>

  </div>
)
})}


        </div>
        </>
    )
}
export default GroceryDetails