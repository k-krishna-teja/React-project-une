import React from 'react'

const Collections = (props) => {
  const {title,img2,img4,img6,img8,img10} = props.hommesFashion

  return (
    <div className='colletionSection'>
      <h2>{title}</h2>
      <div className="hommeImages">
        <img src={img2} alt="title" />
        <img src={img4} alt="title" />
        <img src={img6} alt="title" />
        <img src={img8} alt="title" />
        <img src={img10} alt="title" />

      </div>
    </div>
  )
}

export default Collections
