import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BodySection from './components/BodySection'
import ReviewScroller from './components/ReviewScroller'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <div className='mt-24'>
        <BodySection />
      </div>
      <div className='mt-16 px-10'>
        <ReviewScroller />
      </div>
      <div className='mt-16 px-10'>
        <Footer />
      </div>
    </>
  )
}

export default App
