import React, { useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

export default function Product() {

  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(0)

  const images = [
    "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW4lMjBqZWFuJTIwcGFudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1592595293637-8557fa6d3c64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW4lMjBqZWFuJTIwcGFudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  ]
  return (
    <div className='product'>
      <div className='left'>
        <div className="images">
          <img src={images[0]} alt='' onClick={e=>setSelectedImg(0)}/>
          <img src={images[1]} alt='' onClick={e=>setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt=''/>
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$199</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eius quos nisi at totam mollitia blanditiis aliquid. Repellat, sit culpa.
        </p>
        <div className="quantity">
          <button onClick={()=>setQuantity(prev=>prev ===1 ? 1 : prev-1)}>
            -
          </button>
          {quantity}
          <button onClick={()=>setQuantity(prev=>prev+1)}>
            +
          </button>
        </div>
        <button className='add'>
          <AddShoppingCartIcon/> ADD TO CART
        </button>
        <div className='links'>
          <div className='item'>
            <FavoriteBorderIcon/> ADD TO WISH LIST
          </div>
          <div className='item'>
            <BalanceIcon/> ADD TO COMPARE
          </div>
        </div>
        <div className='info'>
          <span>Vender: Jeans</span>
          <span>Product Type: Pants </span>
          <span>Tag: Pants, Women, Jeans, Bottom</span> 
        </div>
        <hr/>

        <div className='details'>
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}
