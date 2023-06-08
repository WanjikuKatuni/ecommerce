import React from 'react'
import Featured from '../../components/Featured/Featured'
import Slider from '../../components/Slider/Slider'

export default function Home() {
  return (
    <div className='home'>
        <Slider/>
        <Featured type="Featured"/>
        <Featured type="Trending"/>
    </div>
  )
}
