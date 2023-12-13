import React from 'react'
import { Link } from 'react-router-dom';
import { useCart, useDispatchCart } from '../components/ContextReducer'
export default function Cart() {
    let data = useCart();
    let dispatch = useDispatchCart();
    if (data.length === 0) {
        return (
            <div>
                <div className='m-5 w-100 text-center fs-3' style={{color:'red'}}>The Cart is Empty!</div>
            </div>
        )
    }

    const handeCheckOut = async () => {
        let userEmail = localStorage.getItem("userEmail");
        let response = await fetch("http://localhost:4444/api3/orderData",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
                body: JSON.stringify({
                    order_data: data,
                    email: userEmail,
                    order_date: new Date().toDateString()
                })
            }
        );

        if(response.status === 200){
            dispatch({type:"DROP"})
        }      
}
let totalPrice = data.reduce((total, food) => total + food.price, 0)

return (
    <div> <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
        <table className='table table-hover '>
            <thead className=' text-info fs-4'>
                <tr>
                    <th scope='col' >#</th>
                    <th scope='col' >Name</th>
                    <th scope='col' >Quantity</th>
                    <th scope='col' >Option</th>
                    <th scope='col' >Amount</th>
                    <th scope='col' ></th>
                </tr>
            </thead>
            <tbody className=' text-danger'>
                {data.map((food, index) => (
                    <tr>
                        <th scope='row' >{index + 1}</th>
                        <td >{food.name}</td>
                        <td>{food.qty}</td>
                        <td>{food.size}</td>
                        <td>{food.price}</td>
                        <td ><button type="button" className="btn p-0" ><img style={{ width: "25px", height: "25px" }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq4p-Y4Cy5Uwb48Q4gmPZkffl0A11-6N2JPXaCOzl0xQ&s'
                            alt='delete' onClick={() => { dispatch({ type: "REMOVE", index: index }) }} />
                        </button> </td></tr>
                ))}
            </tbody>
        </table>
        <div className='text-danger '><h1 className='fs-2 '>Total Price: /-{totalPrice}</h1></div>
        <div>
            <Link to="/dummyGateway"> <button className='btn bg-info mt-5 ' onClick={handeCheckOut} > Check Out </button></Link>
        </div>
    </div>
    </div>
) }

