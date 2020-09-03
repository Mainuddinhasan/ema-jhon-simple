import React, { useEffect } from 'react';
import fakeData from '../../fakeData';
import { useState } from "react";
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';
const Shop = () => {
  const first10 = fakeData.slice(0,10);
  const [products,setProducts] = useState(first10);
  const[cart,setCart] = useState([])
 
useEffect(() =>{
  const savedCart = getDatabaseCart();
  // console.log(savedCart);
  const productKeys = Object.keys(savedCart);
  // console.log(productKeys)
  const previousCart = productKeys.map (existingKey => {
  const product = fakeData.find(pd =>pd.key === existingKey);
  product.quantity = savedCart[existingKey]
  // console.log(existingKey,savedCart[existingKey])
  return product;
  })
  setCart(previousCart)
// console.log(savedCart); 
console.log(previousCart) 
},[])
  const handleAddProduct = (product) => {
   
    const toBeAddedKey = product.key
    const sameProduct = cart.find(pd => pd.key === toBeAddedKey )
    let count = 1;
    let newCart;
    if(sameProduct){
      // const count = sameProduct.quantity + 1; const dile quantity barbena
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter(pd => pd.key !== toBeAddedKey)
      newCart = [...others, sameProduct]
    }
    else{
      product.quantity = 1;
      newCart = [...cart, product]
    }

setCart(newCart);
addToDatabaseCart (product.key,count)
 }

return (
<div className="twin-container">
    <div className="product-container">
    {
    products.map(pd => <Product
        key={pd.key}
        showAddToCart = {true}  
        handleAddProduct = { handleAddProduct}
        produces ={pd}>

         </Product> )  
    }
    
    </div>
    <div className="cart-container">
       <Cart cart= {cart}>
       <Link to="/review">
        <button className ="main-button">Review</button>
        </Link>
       </Cart>
    </div>
    
</div>

);
};
export default Shop;


// 38.4
// import React, { useEffect } from 'react';
// import fakeData from '../../fakeData';
// import { useState } from "react";
// import './Shop.css'
// import Product from '../Product/Product';
// import Cart from '../Cart/Cart';
// import { addToDatabaseCart } from '../../utilities/databaseManager';

// const Shop = () => {
//   const first10 = fakeData.slice(0,10);
//   const [products,setProducts] = useState(first10);
//   const[cart,setCart] = useState([])


//   const handleAddProduct = (product) => {
   
//     const toBeAddedKey = product.key
//     const sameProduct = cart.find(pd => pd.key === toBeAddedKey )
//     let count = 1;
//     let newCart;
//     // let count sameProduct.quantity =count;
//   // }
//     if(sameProduct){
//       const count = sameProduct.quantity + 1;//sameProducter notun count
//       // sameProduct.quantity = sameProduct.quantity + 1;
//       sameProduct.quantity = count;
//       const others = cart.filter(pd => pd.key !== toBeAddedKey)
//       newCart = [...others, sameProduct]
//     }
//     else{
//       product.quantity = 1;
//       newCart = [...cart, product]
//     }
// //     // const count = sameProduct.length

// //     // const sameProduct = newCart.filter(pd => pd.key === product.key)
// //     // const count = sameProduct.length
// //     // console.log('Product added',product)

// //     // const newCart = [...cart,product];
// setCart(newCart);
// //     // const sameProduct = newCart.filter(pd => pd.key === product.key)
// //  const count = sameProduct.length

//  addToDatabaseCart (product.key,count)
//  }

// return (
// <div className="twin-container">
//     <div className="product-container">
//     {
//     products.map(pd => <Product
//         key={pd.key}
//         showAddToCart = {true}  
//         handleAddProduct = { handleAddProduct}
//         produces ={pd}>

//          </Product> )  
//     }
    
//     </div>
//     <div className="cart-container">
//        <Cart cart= {cart}></Cart>
//     </div>
    
// </div>

// );
// };
// export default Shop;


// 37.7
// import React from 'react';
// import fakeData from '../../fakeData';
// import { useState } from "react";
// import './Shop.css'
// import Product from '../Product/Product';
// import Cart from '../Cart/Cart';
// import { addToDatabaseCart } from '../../utilities/databaseManager';

// const Shop = () => {
//   const first10 = fakeData.slice(0,10);
//   const [products,setProducts] = useState(first10);
//   const[cart,setCart] = useState([])

//   const handleAddProduct = (product) => {
//     console.log('Product added',product)
//     const newCart = [...cart,product];
//     setCart(newCart)
//     const sameProduct = newCart.filter(pd => pd.key === product.key)
//     const count = sameProduct.length
//     addToDatabaseCart (product.key,count)
//     // addToDatabaseCart (product.key,1)
//   }
// return (
// <div className="shop-container">
//     <div className="product-container">
//     {
//     products.map(pd => <Product
//         key={pd.key}
//         showAddToCart = {true}  
//         handleAddProduct = { handleAddProduct}
//         produces ={pd}>

//          </Product> )  
//     }
    
//     </div>
//     <div className="cart-container">
//        <Cart cart= {cart}></Cart>
//     </div>
    
// </div>
// );
// };
// export default Shop;

// 37.5
// import React from 'react';
// import fakeData from '../../fakeData';
// import { useState } from "react";
// import './Shop.css'
// import Product from '../Product/Product';
// import Cart from '../Cart/Cart';

// const Shop = () => {
//   const first10 = fakeData.slice(0,10);
//   const [products,setProducts] = useState(first10);
//   const[cart,setCart] = useState([])

//   const handleAddProduct = (product) => {
//     console.log('Product added',product)
//     const newCart = [...cart,product];
//     setCart(newCart)
//   }
// return (
// <div className="shop-container">
//     <div className="product-container">

// {/* produces=props(name) */}
//     {
//     products.map(pd => <Product
//         showAddToCart = {true}  
//         handleAddProduct = { handleAddProduct}
//         produces ={pd}>

//          </Product> )  
//     }
    
//     </div>
//     <div className="cart-container">
//        <Cart cart= {cart}></Cart>
//     </div>

//     {/* <h1>This is Shop</h1>
//     {/* <h3>{ products.length }</h3>  */}
    
// </div>
// );
// };
// export default Shop;