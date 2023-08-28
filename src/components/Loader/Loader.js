import React from 'react'
import './Loader.scss'


function Loader( {name = "Loading"}) {
  return (
        <div className='loader'> 
            <div className='animation'></div>
            <div className='title'>
               {name}
            </div>
        </div>
   )
}

export default Loader