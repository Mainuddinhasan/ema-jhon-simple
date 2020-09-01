import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    let {productKey} = useParams()//hook use korchi,read korarjonno app.js e deoa productKey
    const product = fakeData.find(pd => pd.key === productKey)//callback function find arrayer jetar sathe match hobe seta die dibe fakeData=array
    // console.log(product)
    return (
        <div>
            <h1> {productKey}ProductDetail Coming soooooooon</h1>
            <Product showAddToCart={false} produces={product}></Product>
        </div>
    );
};

export default ProductDetail;


// 37.5
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import fakeData from '../../fakeData';
// import Product from '../Product/Product';

// const ProductDetail = () => {
//     let {productKey} = useParams()//hook use korchi,read korarjonno app.js e deoa productKey
//     const product = fakeData.find(pd => pd.key === productKey)//callback function find arrayer jetar sathe match hobe seta die dibe fakeData=array
//     console.log(product)
//     return (
//         <div>
//             <h1> {productKey}ProductDetail Coming soooooooon</h1>
//             <Product showAddToCart={false} produces={product}></Product>
//         </div>
//     );
// };

// export default ProductDetail;