import React from 'react'
import "./card.css"
const Card = ({item}) => {
  return (
    <div className='card'>
        <img className='imageOfNews' src={item.urlToImage} alt="" />
        <div className="wrap">
        <h1 className='headLine'>{item.title}</h1>
        <p className='paraLine'>{item.description}</p>
        <a href={item.url} target="_blank" rel="noreferrer noopener">
             For More info
        </a>
        </div>
    </div>
  )
}

export default Card