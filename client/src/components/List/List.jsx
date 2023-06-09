import React from 'react'
import Card from '../Card/Card'
import './List.scss'

export default function List() {

    const data = [
         {
            id:1,
            img: "https://plus.unsplash.com/premium_photo-1671135590215-ded219822a44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80",
            title: "White Pullover - Men",
            oldPrice: 13,
            price: 11,
        },
        {
            id:2,
            img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Short Jean Shorts - Women",
            oldPrice: 12,
            price: 11,
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
        {
            id:5,
            img: "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            title: "Women Gray Jumpsuit",
            oldPrice: 56,
            price: 55,
        },
        {
            id:6,
            img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=720&q=80",
            title: "Women sweat-set",
            oldPrice: 100,
            price: 99,
        },
        {
            id:7,
            img: "https://images.unsplash.com/photo-1597633125097-5a9961e1f03d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
            title: "Royal Red Purse",
            oldPrice: 24,
            price: 22,
        },
        {
            id:8,
            img:"https://images.unsplash.com/photo-1619603364937-8d7af41ef206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            title: "Beige Knee-length Trench Coat",
            oldPrice: 79,
            price: 62,
        },
        {
            id:9,
            img:"https://images.unsplash.com/photo-1522512115668-c09775d6f424?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            title: "Beige Knee-length Trench Coat",
            oldPrice: 64,
            price: 60,
        },
        {
            id:10,
            img:"https://images.unsplash.com/photo-1583686543381-2608547b3963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80",
            title: "White Pant Suit",
            oldPrice: 114,
            price: 113,
        },

    ]



  return (
    <div className='list'>
        {data?.map(item => (
            <Card item={item} key={item.id}/>
        ))}
    </div>
  )
}
