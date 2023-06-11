import React from 'react'
import './Cart.scss'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


export default function Cart() {

    const data = [
        {
            id:1,
            img: "https://images.pexels.com/photos/2343661/pexels-photo-2343661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Wpants",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni",
            oldPrice: 13,
            price: 11,
        },
         {
            id:2,
            img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Wshorts",
            desc: 'Lorem ipsum dolor sit amet',
            oldPrice: 12,
            price: 11,
        },
    ]
  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {data?.map((item) =>(
            <div className='item' key={item.id}>
                <img src={item.img} alt=""/>
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className='price'>1 x ${item.price}</div>
                </div>
                <DeleteOutlineIcon className='delete'/>
            </div>
        ))}
        <div className='total'>
            <span>SUBTOTAL</span>
            <span>$123</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className='reset'>Reset Cart</span>
    </div>
  )
}
