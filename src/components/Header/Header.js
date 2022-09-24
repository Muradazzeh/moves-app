import React from 'react'
import { Link } from 'react-router-dom'
import user from '../../image/00.JPG'
import './Header.scss'
const Header = () => {
  return (
    <div className='header'>
      <Link to="/">
      <div className='logo'>Movie App</div>
      </Link>
      < div className='user-image'>
        <img src={user } alt=' image' />
      </div>
    </div>
  )
}
export default Header