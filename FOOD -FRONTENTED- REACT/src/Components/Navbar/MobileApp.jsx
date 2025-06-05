import React from 'react'
import { assets } from '../../assets/assets'
import './MobileApp.css'

const MobileApp = () => {
  return (
    <div className='app-down' id='app-down'>
        <p>For Better Expierence Download <br />Tomato App</p>
        <div className="app-download-platform">
            <img src={assets.play_store}/>
            <img src={assets.app_store}/>
        </div>
       
        </div>
  )
}

export default MobileApp