import React from 'react'
import { coffemenu } from '../data/coffe'
export default function Catalog() {
    

  return (
    <div>
        <div className='catalog'>
            {coffemenu.map(p =>
                <article key={p.id} className='catalog-item'>
                    <img src={p.image} alt={p.name} />
                    <h2>{p.name}</h2>
                    <p>{p.price}  ₽</p>
                </article>
            )}
        </div>
    </div>
  )
}
