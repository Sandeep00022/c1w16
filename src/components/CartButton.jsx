import { useState } from "react";
// keep the add to cart component here
const CartButton = () => {

  const [count,setCount]= useState(0)
    //manage state of the count 
const handleDec=()=>{
  setCount(count-1)
}

const handleinc=()=>{

  
   setCount(count+1)
}

const handleCart=()=>{
  setCount(count+1)
}




  return <>

  {count==0?(<>
  {/* add to cart button */}
  {/* count with - and  + button */}
  <button className="Cart" onClick={handleCart} >Add to Cart</button>
 
  </>):(
     <div>
      
     <button className="plus" onClick={handleDec}>-</button>
     <p className="count-item">{count}</p>
     <button className="plus" onClick={handleinc} >+</button>
     
 </div>
  )}

  </>
  

};


export default CartButton
