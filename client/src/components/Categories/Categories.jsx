import React from 'react'
import { Link } from 'react-router-dom'
import './Categories.scss'

export default function Categories() {
  return (
    <div className='categories'>
        <div className='col'>
            <div className='row'>
                <img src="https://images.pexels.com/photos/9750780/pexels-photo-9750780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=''/>
                <button>
                    <Link className='link' to='/products/1'>Sale</Link>
                </button>
            </div>
            <div className='row'>
            <img src="https://images.unsplash.com/photo-1563178406-4cdc2923acbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=696&q=80" alt=''/>
                <button>
                    <Link className='link' to='/products/1'>Women</Link>
                </button>
            </div>
        </div>

        <div className='col'>
            <div className="row">
            <img src="https://images.unsplash.com/photo-1614786269829-d24616faf56d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" alt=''/>
                <button>
                    <Link className='link' to='/products/1'>New Season</Link>
                </button>
            </div>
        </div>

        <div className='col col-l'>
            <div className="row">
                <div className="col">
                    <div className="row"> <img src="https://images.pexels.com/photos/2061901/pexels-photo-2061901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=''/>
                <button>
                    <Link className='link' to='/products/1'>Men</Link>
                </button></div>
                </div>
                <div className="col">
                    <div className="row"> <img src="https://images.pexels.com/photos/9758189/pexels-photo-9758189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=''/>
                <button>
                    <Link className='link' to='/products/1'>Accessories</Link>
                </button></div>
                </div>
            </div>
            <div className="row">
                 <img src="https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=''/>
                <button>
                    <Link className='link' to='/products/1'>Shoes</Link>
                </button>
            </div>
        </div>
    </div>
  )
}
