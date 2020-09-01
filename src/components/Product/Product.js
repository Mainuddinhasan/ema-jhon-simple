import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props)
// console.log(props.produces.key);
const { img, name, seller, price, stock ,key} = props.produces;
return (
<div className="product">
<div>
    <img src={img} alt="" />
    {/*code short korechi const die <img src={props.produces.img} alt=""/> */}
</div>
<div>
<h4 className="product-name"><Link to={"/product/"+key}> {name} </Link> </h4>
{/* <h4 className="product-name"><Link to={"/"+key}> {name} </Link> </h4> */}
    {/* <h4 className="product-name"><Link to="/produces"> {name} </Link> </h4> */}
    <br />
    <p><small>by: {seller}</small></p>
    <p>${price}</p>
    <br />
    <p><small>Only {stock} left in stock - order soon</small></p>
    
    {/* {props.showAddToCart && */}
      {props.showAddToCart &&    <button  
    className ="main-button"
    onClick={ ()=>props.handleAddProduct(props.produces)}
    >
    <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
    </button>}
</div>
{/* <h1>This is Product </h1> */}

</div>
);
};

export default Product;


// 37.7
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
// import './Product.css'
// import { Link } from 'react-router-dom';

// const Product = (props) => {
//     // console.log(props)
// // console.log(props.produces.key);
// const { img, name, seller, price, stock ,key} = props.produces;
// return (
// <div className="product">
// <div>
//     <img src={img} alt="" />
//     {/*code short korechi const die <img src={props.produces.img} alt=""/> */}
// </div>
// <div>
// <h4 className="product-name"><Link to={"/product/"+key}> {name} </Link> </h4>
// {/* <h4 className="product-name"><Link to={"/"+key}> {name} </Link> </h4> */}
//     {/* <h4 className="product-name"><Link to="/produces"> {name} </Link> </h4> */}
//     <br />
//     <p><small>by: {seller}</small></p>
//     <p>${price}</p>
//     <br />
//     <p><small>Only {stock} left in stock - order soon</small></p>
    
//     {/* {props.showAddToCart && */}
//       {props.showAddToCart &&    <button  
//     className ="main-button"
//     onClick={ ()=>props.handleAddProduct(props.produces)}
//     >
//     <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
//     </button>}
// </div>
// {/* <h1>This is Product </h1> */}

// </div>
// );
// };

// export default Product;


// 37.5
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
// import './Product.css'
// import { Link } from 'react-router-dom';

// const Product = (props) => {
//     console.log(props)
// // console.log(props.produces.key);
// const { img, name, seller, price, stock ,key} = props.produces;
// return (
// <div className="product">
// <div>
//     <img src={img} alt="" />
//     {/*code short korechi const die <img src={props.produces.img} alt=""/> */}
// </div>
// <div>
// <h4 className="product-name"><Link to={"/product/"+key}> {name} </Link> </h4>
// {/* <h4 className="product-name"><Link to={"/"+key}> {name} </Link> </h4> */}
//     {/* <h4 className="product-name"><Link to="/produces"> {name} </Link> </h4> */}
//     <br />
//     <p><small>by: {seller}</small></p>
//     <p>${price}</p>
//     <br />
//     <p><small>Only {stock} left in stock - order soon</small></p>
    
//     {/* {props.showAddToCart && */}
//       {props.showAddToCart &&    <button  
//     className ="main-button"
//     onClick={ ()=>props.handleAddProduct(props.produces)}
//     >
//     <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
//     </button>}
// </div>
// {/* <h1>This is Product </h1> */}

// </div>
// );
// };

// export default Product;



// 37,4
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
// import './Product.css'
// import { Link } from 'react-router-dom';

// const Product = (props) => {
// console.log(props.produces.key);
// const { img, name, seller, price, stock, key } = props.produces;
// return (
// <div className="product">
// <div>
//     <img src={img} alt="" />
//     {/*code short korechi const die <img src={props.produces.img} alt=""/> */}
// </div>
// <div>
// <h4 className="product-name"><Link to={"/product/"+key}> {name} </Link> </h4>
// {/* <h4 className="product-name"><Link to={"/"+key}> {name} </Link> </h4> */}
//     {/* <h4 className="product-name"><Link to="/produces"> {name} </Link> </h4> */}
//     <br />
//     <p><small>by: {seller}</small></p>
//     <p>${price}</p>
//     <br />
//     <p><small>Only {stock} left in stock - order soon</small></p>
    
//     <button 
//     className ="main-button"
//     onClick={ ()=>props.handleAddProduct(props.produces)}
//     // onClick={props.handleAddProduct(props.produces)}
//     >
//     <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
// </div>
// {/* <h1>This is Product </h1> */}

// </div>
// );
// };

// export default Product;


// module 34
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
// import './Product.css'

// // function add(a,b){
// //     return a+b;
// // }

// // const abc = () =>add
// // abc()

// // function abc(){
// //     return add(2,3)
// // }
// // abc()

// const Product = (props) => {
// // console.log(props);
// const { img, name, seller, price, stock } = props.produces;
// return (
// <div className="product">
// <div>
//     <img src={img} alt="" />
//     {/*code short korechi const die <img src={props.produces.img} alt=""/> */}
// </div>
// <div>
//     <h4 className="product-name"> {name}</h4>
//     <br />
//     <p><small>by: {seller}</small></p>
//     <p>${price}</p>
//     <br />
//     <p><small>Only {stock} left in stock - order soon</small></p>
    
//     <button 
//     className ="main-button"
//     onClick={ ()=>props.handleAddProduct(props.produces)}
//     // onClick={props.handleAddProduct(props.produces)}
//     >
//     <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
// </div>
// {/* <h1>This is Product </h1> */}

// </div>
// );
// };

// export default Product;