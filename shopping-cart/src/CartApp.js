import './CartApp.css';
import React, {useState, useEffect} from 'react';
import ShoppingCart from './Components/ShoppingCart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkout from './Components/Checkout';

function CartApp() {
  const [cartContent, setContent] = useState([]);
  const [item, setItem] = useState([]);
  const id = 1; 
  //const [item] = useState([id: 1])
  const [cartQTY, setQTY] = useState(0);

useEffect(() => {
  fetch(`http://localhost:3001/api/cart/${id}`)
          .then ((res) => res.json())
          .then ((data) => {
            setItem(data);
          })
          // res.json())
          // .then ((data) => {
          //   
          //   console.log(data)
          
          // })
})


return (
  <Router>
      <Routes>
      
        <Route exact path='/' element={
          <ShoppingCart setContent = {setContent} cartContent = {cartContent} item = {item}/>
        }>
        </Route>

        <Route exact path='/checkout' element={
          <Checkout setContent = {setContent} cartContent = {cartContent} item = {item}/>
        }>
        </Route>
        
      </Routes>
    </Router>
)
      }


export default CartApp;

//   if (checkout){
//     return (<Checkout 
//               setCheckout={setCheckout}
//               cartContent={cartContent}
//               />)
//   } else { return (<ShoppingCart 
//               checkout={checkout}
//               setCheckout={setCheckout} 
//               setContent={setContent}
//               cartContent={cartContent}
//               getItem={item}
//               />)}
// }

