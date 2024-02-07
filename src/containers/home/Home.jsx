import React from "react"
import banner from "../../assets/banner.jpg"
import { Link } from "react-router-dom"
import "./Home.css"

function Home() {
    return (
        <div className="main-container">
            <div className="banner">
                <div className="banner-info-block">
                    <Link className="before-title link">
                        Наша продукция используется по всему Казахстану →
                    </Link>
                    <h1 className="title banner-title">
                        Работать легко вместе с нами
                    </h1>
                    <p className="sub-title">
                        ТОО «АПРО» - выступает на рынке информационных
                        технологий как системный интегратор по автоматизации
                        обработки информации на рабочих местах любого уровня.
                        Обладая коллективом высококвалифицированных
                        IT-специалистов, наша компания является одним из лидеров
                        на рынке информационных технологий в городе Актобе.
                    </p>
                    <Link className="btn" to="/products">
                        Начать работать вместе !
                    </Link>
                </div>
                <div className="banner-image-block">
                    <img className="banner-image" src={banner} alt="banner" />
                </div>
            </div>
        </div>
    )
}

export default Home
