import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import NotFound from './components/NotFound/NotFound';

import ProductDetail from './components/ProductDetail/ProductDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inventory from './components/Inventory/Inventory';


function App() {
 return (
    <div>
    <Header></Header>
    <Router>
    <Switch>
          <Route path="/shop">
            {/* <Shop /> */}
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
            {/* <Topics /> */}
          </Route>
          <Route path="/Inventory">
           <Inventory></Inventory>
          </Route>
          {/* <Route path="/:producesKey"> */}
          <Route path="/product/:productKey">{/* jekuno numdeajabe */}
           <ProductDetail></ProductDetail>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
            {/* <Topics /> */}
          </Route>
            <Route path="*">    {/*   * bakisobulo(component ke ) dhore felbe tai er age dite hobe */}
          <NotFound></NotFound>
            {/* <Home /> */}
            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;



// 37.5
// import React from 'react';
// import './App.css';
// import Header from './components/Header/Header';
// import Shop from './components/Shop/Shop';
// import Review from './components/Review/Review';
// import NotFound from './components/NotFound/NotFound';

// import ProductDetail from './components/ProductDetail/ProductDetail';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import Inventory from './components/Inventory/Inventory';


// function App() {
//  return (
//     <div>
//     <Header></Header>
//     <Router>
//     <Switch>
//           <Route path="/shop">
//             {/* <Shop /> */}
//             <Shop></Shop>
//           </Route>
//           <Route path="/review">
//             <Review></Review>
//             {/* <Topics /> */}
//           </Route>
//           <Route path="/Inventory">
//            <Inventory></Inventory>
//           </Route>
//           {/* <Route path="/:producesKey"> */}
//           <Route path="/product/:productKey">{/* jekuno numdeajabe */}
//            <ProductDetail></ProductDetail>
//           </Route>
//           <Route exact path="/">
//             <Shop></Shop>
//             {/* <Topics /> */}
//           </Route>
//             <Route path="*">    {/*   * bakisobulo(component ke ) dhore felbe tai er age dite hobe */}
//           <NotFound></NotFound>
//             {/* <Home /> */}
            
//           </Route>
//         </Switch>
//       </Router>
//     </div>
//   );
// }

// export default App;

//  37.4
// import React from 'react';
// import './App.css';
// import Header from './components/Header/Header';
// import Shop from './components/Shop/Shop';
// import Review from './components/Review/Review';
// import NotFound from './components/NotFound/NotFound';

// import ProductDetail from './components/ProductDetail/ProductDetail';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import Inventory from './components/Inventory/Inventory';


// function App() {
//  return (
//     <div>
//     <Header></Header>
//     <Router>
//     <Switch>
//           <Route path="/shop">
//             {/* <Shop /> */}
//             <Shop></Shop>
//           </Route>
//           <Route path="/review">
//             <Review></Review>
//             {/* <Topics /> */}
//           </Route>
//           <Route path="/Inventory">
//            <Inventory></Inventory>
//           </Route>
//           {/* <Route path="/:producesKey"> */}
//           <Route path="/product/:productKey">{/* jekuno numdeajabe */}
//            <ProductDetail></ProductDetail>
//           </Route>
//           <Route exact path="/">
//             <Shop></Shop>
//             {/* <Topics /> */}
//           </Route>
//             <Route path="*">    {/*   * bakisobulo(component ke ) dhore felbe tai er age dite hobe */}
//           <NotFound></NotFound>
//             {/* <Home /> */}
            
//           </Route>
//         </Switch>
//       </Router>
//     </div>
//   );
// }

// export default App;
