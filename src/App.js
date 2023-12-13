import React from 'react'
import Home from './screens/Home';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Login from './screens/Login';
//import MyOrder from './screens/MyOrder';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { Signup } from './screens/Signup';
import Cart from './screens/Cart';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './screens/MyOrder';
import DummyPaymentGateway from './screens/PaymentGateway';
export const App = () => {
  return (
    <CartProvider>
    <Router>  
      <div> 
        <Routes>
             <Route exact path="/" element={<Home/>}></Route>
             <Route exact path="/login" element={<Login />}></Route>
             <Route exact path="/createuser" element={<Signup />}></Route>
             <Route exact path="/myOrder" element={<MyOrder />}></Route>
             <Route exact path="/dummyGateway" element={<DummyPaymentGateway />}></Route>

        </Routes>
      </div>

    </Router>
    </CartProvider>
  )
}

export default App;
