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
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
        {/*Background Image*/}
      <div className='absolute inset-0 z-0'>
        <img src={heroImage}
         alt="beach"
         className='w-full h-full object-cover'
          />
        <div className='absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/60 '></div>
      </div>

      {/* Content */}
      <div className='relative z-10 container mx-auto px-4 text-center'>
        <div className='max-w-4xl mx-auto'>
         <div className='flex items-center justify-center gap-3 mb-6'>
          <div className='w-14 h-14 rounded-2xl bg-gradient-sunset flex items-center justify-center shadow-lg'>
            <Plane className="w-7 h-7 text-accent-foreground" />
          </div>
          <span className="font-display text-4xl font-bold text-primary-foreground" >
            GetGo
          </span>
        </div>
        <h1 className='font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight'>
            Your Next Adventure <br/>
            <span className="text-golden">Start Here</span>
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 font-sans max-w-2xl mx-auto">
        Discover everything about your destination in one place. Weather, attractions, currency, and more. 
        </p>

        {/* Search Form */}
        <form onSubmit={handleSubmit}  className="max-w-2xl mx-auto">
           <div  className="flex flex-col sm:flex-row gap-3 p-2 bg-card/95 backdrop-blur-lg rounded-2xl shadow-card-hover">
            <div className='relative flex-1'>
               <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
               <input type="text"
               placeholder='Where do you want to go?'
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="pl-12 h-14 border-0 bg-transparent text-lg focus-visible:ring-0 focus-visible:ring-offset-0 "
                /> 
            </div>
            <button type='submit' size="xl" className="gap-2 bg-gradient-sunset text-accent-foreground hover:opacity-90 shadow-lg hover:shadow-xl font-semibold px-6 py-3 rounded-xl text-lg flex items-center justify-center h-14">
                <Search className="w-5 h-5"/>
                Explore
            </button>
           </div> 
        </form>

        {/* Popular Destinations */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Paris", "Tokyo", "New York", "Bali","Dubai"].map((city) =>(
                <button key={city} onClick={() => onSearch(city)} className="px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-sm text-primary-foreground hover:bg-primary-foreground/20 transition-colors border border-primary-foreground/20">
                    {city}
                </button>
            ))}
        </div>
      </div>
      </div>
    </section>
  )
}

export default HeroSection
