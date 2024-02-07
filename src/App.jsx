import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./containers/home/Home"
import About from "./containers/about/About"
import ErrorPage from "./containers/error/ErrorPage"
import Header from "./components/header/Header"

function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </main>
        </>
    )
}

export default App
