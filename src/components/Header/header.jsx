import React from 'react'
import "./header.css"
import seed from '../../images/header/seed.jpg';
import tea from '../../images/header/tea.png'
import candy from '../../images/header/candy.png'
import stall from '../../images/header/stall.png'
import search from '../../images/header/search.png';
import logo from '../../images/header/Kofesko.png';
import basket from '../../images/header/basket.png'

export default function Header() {
  return (
    <header className='header'>
        <div className='header-item-logo'>
            <img className='header-item-logo_logotype' src={logo} alt="Логотип" />
        </div>
        <div className='header-items'>
            <div className='header-items_items-nav'>
                <nav>
                    <ul>
                        <li><a href="">О компании</a></li>
                        <li><a href="">Оплата и доставка</a></li>
                        <li><a href="">Контакты</a></li>
                        <li><a href="">Отзывы</a></li>
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
                    <div className='header-items_items-nav_button'>
                        <button><img src={basket} alt="Корзина" /> Товаров: 1 {"("}100р.{")"}</button>
                    </div>
                </div>
            </div>
            <div>
                <nav>
                    <ul>
                        <li className='header-items-item_seed'><img className='header-items-item_seed_seed' src={seed} alt="Зерно" /><a href=""> КОФЕ</a></li>
                        <li className='header-items-item_seed'><img className='header-items-item_seed_tea' src={tea} alt="Чай" /><a href=""> ЧАЙ</a></li>
                        <li className='header-items-item_seed'><img className='header-items-item_seed_candy' src={candy} alt="Конфета" /><a href=""> СОПУТСТВУЮЩИЕ ТОВАРЫ</a></li>
                        <li className='header-items-item_seed'><img className='header-items-item_seed_stall' src={stall} alt="Палатка для продажи" /><a href="" style={{color:'#ffe2a6'}}> ОПТОВИКАМ</a></li>
                        <div className='header-items-input_button'>
                            <input className='header-items-item_input' type="text" placeholder='Поиск...'/>
                            <button className='header-items-item_button'><img className='header-items-item_seed-search' src={search} alt="Поиск" /></button>
                        </div>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}
