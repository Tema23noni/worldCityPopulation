import React from 'react'

const City = ({name, pop, url, index}) => {
  return (
    <>
        
        <div className='frame'>
          <div className={`frameCont ${index%2 == 0? 'text-right': 'text-left'}`}>
            <h2>{name}</h2>
            <p>
            Population: {pop}
            </p>
          </div>
        </div>
        
        <div className="frame frame_bg">
          <div className="frameCont">
            <div className={`frame-media ${index%2 === 0? 'frame-media-left':'frame-media-right'}`} style={{backgroundImage:`url(${url})` }}></div>
          </div>
        </div>
        <div className='frame'></div>
    </>
  )
}

export default City