import React from 'react'
import './Card.scss'
import {Link} from 'react-router-dom'

export default function Card({item}) {
  return (
    <div className='card'>
            <Link to={`/products/${item.id}`} className='link'>
                <div className='card'>
                    <div className='image'>
                        {item.isNew && <span>New Season</span>}
                        <img src={item.img} alt='' className='mainImg'/>
                        <img src={item.img2} alt='' className='secondImg'/>
                    </div>
                    <div className='details'>
                        <h2>{item.title}</h2>
                        <div className='prices'>
                            <h3>${item.oldPrice}</h3>
                            <h3>${item.price}</h3>
                        </div>
                    </div>
                </div>
            </Link>
    </div>
  )
}
