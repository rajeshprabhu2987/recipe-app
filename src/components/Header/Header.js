import React from 'react'
import './Header.scss'
import SearchBar from '../SearchBar/SearchBar'



function Header({title =  "My App"}) {
  return (
    <div className='header'>
        <div className='title'> {title}</div>

        <SearchBar/>
        
    </div>

    
  )
}

export default Header
