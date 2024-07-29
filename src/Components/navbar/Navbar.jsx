import React from 'react'
import { Link} from 'react-router-dom'

function Navbar() {
  return (
    
      <nav className='z-30 w-full text-white fixed top-0 font-poppins bg-black'>
      <ul className='flex justify-between items-center p-4 list-none'>
        <Link to='/'>
        <li className='text-3xl font-bold'>LOGO</li>
        </Link>
        <div className='flex space-x-4 text-xl'>
          
          <li>
          <Link to='/genre'>
          Genre
          </Link>
          </li>
          
          <div className=' border-l-2 h-8 border-white'></div>
          
          <li>
          <Link to="/">
          Search
          </Link>
          </li>
          
        </div>
      </ul>
    </nav>
    
  )
}

export default Navbar
