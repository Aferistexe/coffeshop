import {useEffect, useState} from 'react'
import {chocolatemenu} from '../../data/chocolate'
import {teamenu} from '../../data/tea'
import {coffemenu} from '../../data/coffe'
import { useBasket } from '../basket/BasketContext';

import '../hitcatalog/hitCatalog.css'




export default function HitCatalog() {
const {addToBasket} = useBasket()
const [chocolate, setchocolate] = useState([])
const [tea,setTea] = useState([])
const [coffee,setCoffee]= useState([])


useEffect(()=>{
  setCoffee(coffemenu.slice(0,4))
  setTea(teamenu.slice(0,4))
  setchocolate(chocolatemenu.slice(0,4))
  
},[])

  const handleAddToCart = (product) => {
    addToBasket(product);
  };





  return (
    <section>
        <article className='topHit-items'>
          <div className='topHit-items_item'>
            {chocolate.map(p =>
              <div key={p.id}>
                <img src={p.image} alt="dasd" />
                <h1>{p.name}</h1>
                <p>{p.price} Р</p>
                <button onClick={() =>handleAddToCart(p)}>Купить</button>
              </div>
            )}
            {tea.map(p =>
              <div key={p.id}>
                <img src={p.image} alt="dasd" />
                <h1>{p.name}</h1>
                <p>{p.price} Р</p>
                <button onClick={() =>handleAddToCart(p)}>Купить</button>

              </div>
            )}
            {coffee.map(p =>
              <div key={p.id}>
                <img src={p.image} alt="dasd" />
                <h1>{p.name}</h1>
                <p>{p.price} Р</p>
                <button onClick={() =>handleAddToCart(p)}>Купить</button>

              </div>
            )}
          </div>
        </article>
    </section>
  )
}
