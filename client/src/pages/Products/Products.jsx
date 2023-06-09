import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../../components/List/List'
import './Products.scss'

export default function Products() {

  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState(null)

  

  return (
    <div className='products'>
      <div className="left">
          <div className="filterItem">
            <h2>Product Categories</h2>
            <div className="inputItem">
              <input type="checkbox" id="1" value={1} />
              <label htmlFor="1">Shoes</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id="2" value={2} />
              <label htmlFor="1">Dresses</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id="3" value={3} />
              <label htmlFor="1">Accessories</label>
            </div>
          </div>

          <div className="filterItem">
            <h2>Filter by price</h2>
            <div className="inputItem">
              <span>0</span>
              <input type='range' min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>
              <span>{maxPrice}</span>
            </div>
          </div>

          <div className="filterItem">
            <h2>Sort by</h2>
            <div className="inputItem">
              <input type='radio' id='asc' value='asc' name='price' onChange={(e)=>setSort("asc")}/>
              <label htmlFor='asc'>Price (Lowest First)</label>
            </div>
            <div className="inputItem">
              <input type='radio' id='desc' value='desc' name='price' onChange={(e)=>setSort("desc")}/>
              <label htmlFor='desc'>Price (Highest First)</label>
            </div>
          </div>
      </div>

      <div className="right">
        <img
          className='catImg'
          src='https://images.unsplash.com/photo-1585914924626-15adac1e6402?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'
          alt=''
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
      </div>
  )
}
