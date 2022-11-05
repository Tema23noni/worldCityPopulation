import React from 'react'
import sound from '../img/icons8-аудио-волна.gif';
import { useState } from 'react';
import { citys } from './cityObj';
import scroll from '../img/icons8-толстая-стрелка-вниз-24 (1).png'
import City from './City';
const AboutCity = () => {
  const [active, setActive] = useState(false);
  let zSpacing = -1000;
  let lastPost = zSpacing / 5;
  let $frames = document.getElementsByClassName('frame') ;
  let frames = Array.from($frames);
  let zVal = [];
  window.onscroll = () =>{
    let top = document.documentElement.scrollTop;
    let delta = lastPost - top
    lastPost = top;
    frames.forEach((item,index) =>{
      zVal.push((index * zSpacing) + zSpacing)
      zVal[index] += delta * -5;
      let frame = frames[index];
      let transform = `translateZ(${zVal[index]}px)`;
      let opacity = zVal[index] < Math.abs(zSpacing)/1?1:0;
      frame.setAttribute('style', `transform: ${transform}; opacity:${opacity}`)
    })
    
    if(top > 10){
      setActive(true)      
    }
    setActive(true)
  }
  const repScroll = (e) =>{
    
    window.scrollTo( x =>{
      console.log(x)
    })
  }
  window.scrollTo(0,1);
  return (
    <div className='par'>
       <section className="cont">  
        <div className="frame">
          <div className="frameCont">
            <h2>World City Populations</h2>
          </div>
        </div>
        <div className='frame frame_bg'></div>
       {
        active 
        && 
        <>
          {citys.map((e,i) =>{
            return <City index={i} name={e.name} pop={e.pop} url={e.urlImg}/>
          })}  
        </>
      }

      </section>

      <img className="soundBtn" src={sound} alt='aud'/>
      <audio className='audio'></audio>
    </div>
  )
}

export default AboutCity