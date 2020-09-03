import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif'
const Review = () => {
    const [cart,setCart]= useState([])
    // const [orderPlaced,setOrderPlaced]= useState()
    const [orderPlaced,setOrderPlaced]= useState(false)

const handlePlaceOrder = () =>{
    // console.log ("order Placed")
    setCart([]);
    setOrderPlaced(true);
    processOrder();//database method
}

const removeProduct = (productKey) => {
    console.log('remove clicked',productKey)
const newCart =cart.filter(pd => pd.key !== productKey) 
setCart(newCart) 
removeFromDatabaseCart (productKey)
}


    useEffect(() =>{
        // cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        
        const cartProducts = productKeys.map(key=>{
            const product= fakeData.find(pd=>pd.key === key)
            product.quantity =savedCart[key];
            return product;
        });
        setCart(cartProducts)
        
    },[])

    const imageStyle = {
        width: "100%",
        height: "400px"
    }
    let donePlaceOrder;
    if(orderPlaced) {
      donePlaceOrder = <img style={ imageStyle}
          src={happyImage} alt=""/>
    }

    return (
    <div className="twin-container">
           {/* <h1>Cart Items : {cart.length}</h1> */}
        <div className="product-container">
        {
        cart.map (pd => <ReviewItem
            product={pd}
            removeProduct ={removeProduct}
            key={pd.key}></ReviewItem>) 
        }
        {
            // orderPlaced && condition deoar chesta
            donePlaceOrder
        }
        </div>
        <div className="cart-container">
            <Cart cart={cart}>
                <button onClick={handlePlaceOrder} className="main-button">
                    Place Order
                </button>
            </Cart>

        </div>
       
    </div>
       
    );
};

export default Review;


// 37
// import React, { useEffect, useState } from 'react';
// import { getDatabaseCart } from '../../utilities/databaseManager';
// import fakeData from '../../fakeData';
// import ReviewItem from '../ReviewItem/ReviewItem';

// const Review = () => {
//     // const {cart,setCart}=  
// const [cart,setCart]= useState([])


//     useEffect(() =>{
//         // cart
        
//         const savedCart = getDatabaseCart();
//         const productKeys = Object.keys(savedCart);
//         //  console.log (savedCart);
//         // console.log (productKeys);
//         // const counts = productKeys.map(key=>savedCart[key]);
//         // console.log (counts);
//         const cartProducts = productKeys.map(key=>{
//             const product= fakeData.find(pd=>pd.key === key)
//             product.quantity =savedCart[key];
//             return product;
//         });
//         setCart(cartProducts)
//         // console.log (cartProducts);
            
       
//         // const cartProducts = productKeys.map(key=>{
//         //     const product= fakeData.find(pd.key === productKey);
//         //     return product;
//         //      });  
//         // // console.log (cartProducts)
//     },[])


//     return (
//         <div>
//            <h1>Cart Items : {cart.length}</h1>
//            {
//                cart.map (pd => <ReviewItem
//                  product={pd}
//                  key={pd.key}>
//               </ReviewItem>) 
//            }
           
//         </div>
//     );
// };

// export default Review;