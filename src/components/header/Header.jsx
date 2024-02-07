import React from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/logo1.svg"

import "./Header.css"

function Header() {
    return (
        <header>
            <div className="main-container">
                <div className="header">
                    <div className="header-bar">
                        <Link className="logo">
                            <img src={logo} alt="Apro" width={30} height={30} />
                            <span className="logo-text">APRO</span>
                        </Link>
                        <nav className="nav">
                            <Link className="nav-item" to="/">
                                Главная
                            </Link>
                            <Link className="nav-item" to="/products">
                                Продукты
                            </Link>
                            <Link className="nav-item" to="/services">
                                Услуги
                            </Link>
                            <Link className="nav-item" to="/news">
                                Новости
                            </Link>
                            <Link className="nav-item" to="/clients">
                                Наши клиенты
                            </Link>
                            <Link className="nav-item" to="/vacancy">
                                Вакансий
                            </Link>
                        </nav>
                    </div>

                    <Link className="btn" to="/contact">
                        Связаться с нами
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
