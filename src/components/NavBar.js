import React, { useState } from 'react'
import { Link,useNavigate } from "react-router-dom"
import Badge from 'react-bootstrap/Badge';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';


export const NavBar = () => {

  const [cartView,setCartView] = useState(false);
  let data =useCart();

 const navigate = useNavigate();
  const handleLogout=()=>{
localStorage.removeItem("authToken");
navigate("/login");
  }
  return (
    <div style={{width:'100%',zIndex:'20', position:'fixed'}}>

      {/* info - ight blue
       primary - blue
       success - green */}

      <nav className="navbar navbar-expand-lg navbar-light bg-info" >
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">EazeeFood</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className='navbar-nav me-auto mb-2'>
              <li className="navbar-nav">
                <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
              </li>
              {(localStorage.getItem("authToken")) ?
                <li className='nav-item'>
                  <Link className="nav-link active fs-5" aria-current="page" to="/myOrder">My Orders</Link>
                </li>
                : ""}
            </ul>

            {(!localStorage.getItem("authToken")) ?

              <div className='d-flex'>
                <Link className=" btn bg-white text-sucess mx-1" to="/login">Login</Link>
                <Link className="btn bg-white text-sucess mx-1" to="/createuser">SignUP</Link>

              </div>
              :
              <div>
                <div className='btn bg-white text-sucess mx-2 ' onClick={()=>{setCartView(true)}}>
                  My Cart{"  "}
                  <Badge pill bg="danger">{data.length}</Badge>
                </div>
         {cartView?<Modal onClose={()=> setCartView(false)}><Cart></Cart></Modal>:null}
                <div className='btn bg-danger text-black mx-2 ' onClick={handleLogout}>
                  Logout
                </div>
              </div>
              }

          </div>
        </div>
      </nav>
    </div>


  )
}
export default NavBar;
