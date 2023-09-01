import React from 'react'

const Hero = () => {
  return (
    <React.Fragment>
        <div className="container pt-5">
            <div className="row pt-5">
                <div className="col-sm-12 text-center pt-5">
                    <p className='hero-heading'>Bitcoin is an innovative payment network and a new kind of money.</p>
                    <div className=' d-flex gap-2 justify-content-center  flex-wrap     '>
                      <a href="/"><button className='hero-btn1'>Get Started With Bitcoin</button></a>
                      <a href="/"><button className='hero-btn2'>Get Started With Bitcoin</button></a>
                      <a href="/"><button className='hero-btn2' >Get Started With Bitcoin</button></a> 
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Hero
