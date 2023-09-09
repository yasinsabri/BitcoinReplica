import React from 'react'
import Hero from '../component/element/Hero'
import Overview from '../component/element/Overview'
import GetStarted from '../component/element/GetStarted'

const Home = () => {
  return (
   <React.Fragment>
    <Hero/>
    <Overview/>
    <GetStarted/>
   </React.Fragment>
  )
}

export default Home
