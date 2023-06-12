import React from 'react'

const Card = ({title, text, image, className, BtnColor}) => {
  return (
    <div className={`card ${className}`}>
      <div className="cardImg">
        <img src={image} alt={image} className='image' />
      </div>
      <div className="cardTitle">
        <h1>{title}</h1>
      </div>
      <div className="cardText">
        <p>{text}</p>
    </div>
    <div className="cardButton">
      <button className='button' style={{color: `${BtnColor}`}}>Learn More</button>
    </div>
  </div>
  )
}

export default Card