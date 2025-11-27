import {useEffect, useState} from 'react'
import {chocolatemenu} from '../../data/chocolate'
import {teamenu} from '../../data/tea'
import {coffemenu} from '../../data/coffe'

import '../hitcatalog/hitCatalog.css'




export default function HitCatalog() {
const [chocolate, setchocolate] = useState([])
const [tea,setTea] = useState([])
const [coffe,setCoffe]= useState([])

useEffect(()=>{
  setCoffe(coffemenu.slice(0,4))
},[])

useEffect(()=>{
  setTea(teamenu.slice(0,4))
},[])

useEffect(()=>{
  setchocolate(chocolatemenu.slice(0,4))
},[])







  return (
    <section>
        <article className='topHit-items'>
          <div className='topHit-items_item'>
            {chocolate.map(p =>
              <div key={p.id}>
                <img src={p.image} alt="dasd" />
                <h1>{p.name}</h1>
                <p>{p.price} Р</p>
              </div>
            )}
            {tea.map(p =>
              <div key={p.id}>
                <img src={p.image} alt="dasd" />
                <h1>{p.name}</h1>
                <p>{p.price} Р</p>
              </div>
            )}
            {coffe.map(p =>
              <div key={p.id}>
                <img src={p.image} alt="dasd" />
                <h1>{p.name}</h1>
                <p>{p.price} Р</p>
              </div>
            )}
          </div>
        </article>
    </section>
  )
}
