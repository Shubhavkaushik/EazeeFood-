import React, { useState, useRef, useEffect } from 'react'
import { useDispatchCart, useCart } from './ContextReducer';
export default function Card(props) {

  const dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef();
  let options = props.options;
  let priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")

  const handleAddToCart = async () => {
    let FOOD = []
    for (const item of data) {
      if (item.id === props.food._id) {
        FOOD = item;
        break;
      }
    }
    if (FOOD !== []) {
      if (FOOD.size === size) {
        await dispatch({ type: "UPDATE", id: props.food._id, price: finalPrice, qty: qty })
        return
      }
      else if (FOOD.size !== size) {
        await dispatch({ type: "ADD", id: props.food._id, name: props.food.name, price: finalPrice, qty: qty, size: size });
        return
      }
      return

    }
    await dispatch({ type: "ADD", id: props.food._id, name: props.food.name, price: finalPrice, qty: qty, size: size });

  }
  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])

  return (
    <div>

      <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "500px" }}>
        <img src={props.food.img} className="card-img-top" alt={props.food.name} style={{ height: "150px", objectFit: "fill" }}></img>
        <div className="card-body">
          <h5 className="card-title">{props.food.name}</h5>
          <p className="card-text">{props.food.description}</p>
          <div className="container ">
            <select className='m-2 h-100 bg-primary rounded' onChange={(e) => setQty(e.target.value)}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                )
              })}
            </select>
            <select className='m-2 h-100 bg-primary rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
              {priceOptions.map((data) => {
                return <option key={data} value={data}>{data}</option>
              })}
            </select>
            <div className='d-inline h-100 fs-5'> ₹{finalPrice}/-</div>
            <hr></hr>
            <button className={'btn btn-info justify-center ms-2'} onClick={handleAddToCart}>Add To Cart</button>
          </div>
        </div>
      </div>





    </div>
  )
}

