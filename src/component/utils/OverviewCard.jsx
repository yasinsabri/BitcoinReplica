import React from 'react'

const OverviewCard = ( {ImgUrl , Heading , Desc}) => {
  return (
    <React.Fragment>
        <div className="O-card">
            <div className='O-card-des pt-5'>
                <img src={ImgUrl} alt="" className=' w-25 ' />
                <h5 className='pt-3 O-heading'>{Heading}</h5>
                <p className='pt-2 o-desc'>{Desc}</p>
            </div>
        </div>
    </React.Fragment>
  )
}

export default OverviewCard
