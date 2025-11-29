import React, { useEffect, useState } from 'react'
import candys from '../../images/slider/candys.png'
import tea from '../../images/slider/tea.jpg'
import coffe from '../../images/slider/coffe.jpg'
import '../slider/slider.css'


export default function Slider() {
  const [slide,setSlide] = useState(0)

  const slides= [
    {
      id:1,
      img:coffe
    },
    {
      id:2,
      img:tea
    },
    {
      id:3,
      img:candys
    },
  ]
  useEffect(()=>{
    const interval = setInterval(()=>{
      setSlide(prev => (prev +1)%slides.length);
  
    },3000)
    return () => clearInterval(interval);


  },[slides.length]);
  

  return (
    <section className='Slides'>
        <div>
            <img src={slides[slide].img} alt="" />
        </div>
    </section>
  )
}
