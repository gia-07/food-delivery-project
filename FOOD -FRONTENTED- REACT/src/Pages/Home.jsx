import React from 'react'
import Header from '../Components/Navbar/Header'
import ExploreMenu from '../Components/Navbar/ExploreMenu'
import { useState } from 'react'
import FoodDisplay from '../Components/Navbar/FoodDisplay'
import MobileApp from '../Components/Navbar/MobileApp'

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
       <Header/>
       {/* proprs sendinggg */}
       <ExploreMenu category={category} setCategory={setCategory} />
       <FoodDisplay category={category}/>
       <MobileApp/>
       
        </div>
  )
}

export default Home