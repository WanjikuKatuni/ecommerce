import React from 'react'
import "./Footer.scss"

export default function Footer() {
  return (
    <div className='footer'>
      <div className='top'>

        <div className='item'>
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        
        <div className='item'>
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>

        <div className='item'>
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quaerat sequi ut cum, accusantium iusto incidunt molestiae, atque enim porro veniam recusandae ipsum praesentium beatae dicta cupiditate cumque maxime perferendis ullam laboriosam explicabo repellendus adipisci?</span>
        </div>

        <div className='item'>
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quaerat sequi ut cum, accusantium iusto incidunt molestiae, atque enim porro veniam recusandae ipsum praesentium beatae dicta cupiditate cumque maxime perferendis ullam laboriosam explicabo repellendus adipisci?</span>
        </div>
      </div>

      <div className='bottom'>
        <div className='left'>
          <span className='logo'>Vivostore</span>
          <span className='copyright'>
            Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className='right'>
          <img src='/img/stripefooter.png' alt=''/>
        </div>
      </div>
    </div>
  )
}
