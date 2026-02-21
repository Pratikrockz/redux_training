import React from 'react'
import { Link } from 'react-router-dom'
import cartIcon from 'url:../assets/cart-icon.svg'

export default function Header() {
 

  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>

        <Link className="cart-icon" to="/cart">
          <img src={cartIcon}  alt="cart-icon" width="30" />
          <div className="cart-items-count">0</div>
        </Link>
      </div>
    </header>
  )
}