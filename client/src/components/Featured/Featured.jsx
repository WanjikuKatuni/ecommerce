import React from 'react'
import Card from '../Card/Card'
import './Featured.scss'

export default function Featured({type}) {

    const data = [
        {
            id:1,
            img: "https://images.pexels.com/photos/17035519/pexels-photo-17035519/free-photo-of-black-and-white-studio-shoot-of-a-young-man-wearing-striped-shirt.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/17035513/pexels-photo-17035513/free-photo-of-black-and-white-studio-shoot-of-a-young-man-wearing-striped-shirt.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            isNew: true,
            title: "Black and White Striped Vintage Shirt",
            oldPrice: 14,
            price: 11,
        },
        {
            id:2,
            img: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Blue-Orange Backpack",
            isNew: true,
            oldPrice: 24,
            price: 20,
        },
       
        {
            id:3,
            img: "https://images.pexels.com/photos/11441880/pexels-photo-11441880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Orange Male Beach Shorts",
            oldPrice: 14,
            price: 10,
        },
        {
            id:4,
            img:"https://images.pexels.com/photos/2395921/pexels-photo-2395921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Printed Top and Max Skirt Set",
            oldPrice: 19,
            price: 12,
        },
    ]
  return (
    <div className='featured'>
        <div className='top'>
            <h1>{type} products</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita cumque beatae repellat obcaecati fuga libero, fugiat eligendi ea ex rem necessitatibus ut delectus adipisci deserunt perferendis rerum sit quo provident.</p>
        </div>

        <div className='bottom'>
            {data.map(item => (
                <Card item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}
