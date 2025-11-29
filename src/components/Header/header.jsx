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
    const { totalItems, totalPrice, basket,minusBasket,plusBasket} = useBasket()
    const [openBasket,setOpenBasket] = useState(false)

    useEffect(()=>{
        if(basket.length === 0 && openBasket){
           setOpenBasket(e => !e) 
        }

    },[basket,openBasket])
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
                {openBasket && (
                    <div className="basket-modal">
                        <div className={basket.length > 3 ? "basket-modal_scroll":''}>

                            <div>
                                <p className="basket_item">Товары в корзине:</p>
                                <button className="close-btn" onClick={() => setOpenBasket(false)}>X</button>
                            </div>      
                            {basket.map((e) =>
                                <div key={e.id} className="basket-modal-item">
                                    <div className="basket-modal-item_img-title">
                                        <img src={e.image} alt="" />
                                        <h1>{e.name}</h1>
                                    </div>
                                    <div className="basket-modal-item_items">
                                        <div className="basket-modal-item_items-quantity_sum">
                                            <p>{e.quantity} шт. на <strong>{e.sum} руб.</strong></p>
                                        </div>
                                        <div className="basket-modal-item_items-btnplus_minus">
                                            <button onClick={() => minusBasket(e)}>-</button>
                                            <button onClick={() => plusBasket(e)}>+</button>
                                            <div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                            )}
                        </div>
                        <div>
                            
                            <div>
                                <p className="basket-modal-item_items-btnplus_minus-sum-text">Всего: </p>
                                <p className="basket-modal-item_items-btnplus_minus-sum"><strong>{totalItems}</strong> на <strong>{totalPrice}</strong> руб.</p>
                            </div>
                            <div>
                                <button className="basket-modal-item_items-btnplus_minus-basket">Корзина</button>
                                <button className="basket-modal-item_items-btnplus_minus-pay">Оформить заказ</button>
                            </div>

                        </div>
                    </div>
                )}
            
        </header>
    )
}