import "./header.css"
import seed from '../../images/header/seed.jpg';
import tea from '../../images/header/tea.png'
import candy from '../../images/header/candy.png'
import stall from '../../images/header/stall.png'
import search from '../../images/header/search.png';
import logo from '../../images/header/Kofesko.png';
import basketimg from '../../images/header/basket.png'
import { useBasket } from '../basket/BasketContext'
import { useEffect, useState } from "react";

export default function Header() {
    const { setbasket,totalItems, totalPrice, basket,minusBasket,plusBasket} = useBasket()
    const [openBasket,setOpenBasket] = useState(false)
    useEffect(()=>{

            if(openBasket && basket.length == 0){
                setOpenBasket(!openBasket)
            }
            
        
    },[basket])
    useEffect(()=>{
      
    },[])


    const btnOpenModal =()=>{
        if(basket.length !== 0){
            setOpenBasket(!openBasket)
        }else{

            alert("Ваша корзина пуста")
        }

    }


    return (
        <header className='header'>
            <div className='header-item-logo'>
                <img className='header-item-logo_logotype' src={logo} alt="Логотип" />
            </div>
            <div className='header-items'>
                <div className='header-items_items-nav'>
                    <nav>
                        <ul>
                            <li><a href="#about">О компании</a></li>
                            <li><a href="#delivery">Оплата и доставка</a></li>
                            <li><a href="#contacts">Контакты</a></li>
                            <li><a href="#reviews">Отзывы</a></li>
                        </ul>
                    </nav>
                    <div className='header-items_items-nav-more'>
                        <div className='header-items_items-nav_tel'>
                            <a href="mailto:kofesko@yandex.ru">kofesko@yandex.ru</a>
                            <p>отзывы и предложения</p> 
                        </div>
                        <div className='header-items_items-nav_tel'>
                            <a href="tel:+79037268028">+7 (903) 726-80-28</a>
                            <p>горячая линия</p> 
                        </div>
                        <div className={openBasket?"modalBtn":""}>
                            <button className="header-items_items-nav_button-btn" onClick={btnOpenModal}><img className="header-items_items-nav_button-img" src={basketimg} alt="Корзина" /> Товаров: {totalItems} ({totalPrice}р.)</button>
                        </div>
                    </div>
                </div>
                <div>
                    <nav>
                        <ul>

                            <li className='header-items-item_seed'>
                                <img className='header-items-item_seed_seed' src={seed} alt="Зерно" />
                                <a href="#coffee">КОФЕ</a>
                            </li>
                            <li className='header-items-item_seed'>
                                <img className='header-items-item_seed_tea' src={tea} alt="Чай" />
                                <a href="#tea">ЧАЙ</a>
                            </li>
                            <li className='header-items-item_seed'>
                                <img className='header-items-item_seed_candy' src={candy} alt="Конфета" />
                                <a href="#accessories">СОПУТСТВУЮЩИЕ ТОВАРЫ</a>
                            </li>
                            <li className='header-items-item_seed'>
                                <img className='header-items-item_seed_stall' src={stall} alt="Палатка для продажи" />
                                <a href="#wholesale" style={{color:'#ffe2a6'}}>ОПТОВИКАМ</a>
                            </li>
                            <div className='header-items-input_button'>
                                <input className='header-items-item_input' type="text" placeholder='Поиск...'/>
                                <button className='header-items-item_button'>
                                    <img className='header-items-item_seed-search' src={search} alt="Поиск" />
                                </button>
                            </div>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="basket-modal">
                {openBasket && basket.map((e)=>
                <div key={e.id} className="basket-modal-item">
                    <img src={e.image} alt="" />
                    <h1>{e.name}</h1>
                    <div className="basket-modal-item_items">
                        <p>{e.price} руб.</p>
                        <p>{e.quantity} шт.</p>
                        <div>
                            <button onClick={()=> plusBasket(e)}>+</button>
                            <button onClick={() => minusBasket(e)}>-</button>
                        </div>
                    </div>
                </div>  
                )}
            </div>
        </header>
    )
}