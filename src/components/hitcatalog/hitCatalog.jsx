import {useEffect, useState} from 'react'
import {products} from '../../data/products'

import { useBasket } from '../basket/BasketContext';

import '../hitcatalog/hitCatalog.css'




export default function HitCatalog() {
const {addToBasket} = useBasket()
const [product, setProduct] = useState([])



useEffect(()=>{
  setProduct(products.slice(0,12))
},[])

  const handleAddToCart = (product) => {
    addToBasket(product);
  };





  return (
    <section>
        <article className='topHit-items'>
          <div className='topHit-items_item'>
            {product.map(p =>
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
