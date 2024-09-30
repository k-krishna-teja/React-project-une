import React from 'react'

const Header = () => {
  return (
    <div className="headerSection">
    <div className="left">
        <div className="title">
            <h2>Steam Punk Mall</h2>
        </div>
    </div>
    <div className="center">
        <ul>
            <li>Clocks</li>
            <li>Gadgets</li>
            <li>Decors</li>
            <li>Other</li>
        </ul>
    </div>
    <div className="search">
        <input placeholder='search' type='text' />
    </div>
    <div className="right">
        <div className="signin">
            Signin / Signup
        </div>
        <div className="cart">
            Cart
        </div>
    </div>
    </div>
  )
}

export default Header
