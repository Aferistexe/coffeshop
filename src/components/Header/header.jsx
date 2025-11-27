import "./header.css"
import seed from '../../images/header/seed.jpg';
import tea from '../../images/header/tea.png'
import candy from '../../images/header/candy.png'
import stall from '../../images/header/stall.png'
import search from '../../images/header/search.png';
import logo from '../../images/header/Kofesko.png';
import basket from '../../images/header/basket.png'
import { useBasket } from '../basket/BasketContext'

export default function Header() {
    const { totalItems, totalPrice } = useBasket()

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
                        <div className='header-items_items-nav_button'>
                            <button><img src={basket} alt="Корзина" /> Товаров: {totalItems} ({totalPrice}р.)</button>
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
        </header>
    )
}