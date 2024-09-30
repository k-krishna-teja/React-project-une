import React from 'react'

const FemmesCollection = (props) => {
    const {title,img1,img3,img5,img7} = props.femmesFashion

  return (
    <div className='FemmeSection'>
      <h2>{title}</h2>
      <div className='bannerSection'>
     <div className="bannerBox">
     <img src="static/femme.jpg" alt="title" />     </div>
    </div>
      

      <div className="femmeImages">
        <img src={img1} alt="title" />
        <img src={img3} alt="title" />
        <img src={img5} alt="title" />
        <img src={img7} alt="title" />

      </div>
    </div>
  )
}

export default FemmesCollection
