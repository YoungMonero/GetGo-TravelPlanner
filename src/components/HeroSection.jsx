import React, { useState } from 'react'
import {Search, MapPin, Plane } from "lucide-react"
import heroImage from "../assets/hero-beach.jpg"




const HeroSection = ({onSearch}) => {

    const [searchQuery, setSearchQuery] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (searchQuery.trim()){
            onSearch(searchQuery.trim())
        }
    }

  return (
    <div>
        {/*Background Image*/}
      <div>
        <img src={heroImage} alt="beach" />
        <div></div>
      </div>

      {/* Content */}
      <div>
        <div>
         <div>
          <div>
            <Plane/>
          </div>
          <span>
            GetGo
          </span>
        </div>
        <h1>
            Your Next Adventure <br/>
            <span>Start Here</span>
        </h1>
        <p>
        Discover everything about your destination in one place. Weather, attractions, currency, and more. 
        </p>

        {/* Search Form */}
        <form onSubmit={handleSubmit}>
           <div>
            <div>
               <MapPin/>
               <input type="text"
               placeholder='Where do you want to go?'
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
                /> 
            </div>
            <button type='submit'>
                <Search/>
                Explore
            </button>
           </div> 
        </form>

        {/* Popular Destinations */}
        <div>
            {["Paris", "Tokyo", "New York", "Bali","Dubai"].map((city) =>(
                <button key={city} onClick={() => onSearch(city)}>
                    {city}
                </button>
            ))}
        </div>
      </div>
      </div>
    </div>
  )
}

export default HeroSection
