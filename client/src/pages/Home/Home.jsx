import React from 'react'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
import Featured from '../../components/Featured/Featured'
import Slider from '../../components/Slider/Slider'

export default function Home() {
  return (
    <div className='home'>
        <Slider/>
        <Featured type="Featured"/>
        <Categories/>
        <Featured type="Trending"/>
        <Contact/>
    </div>
  )
}
