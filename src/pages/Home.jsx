import React from 'react'
import About from '../components/about/About'
import Booking from '../components/booking/Booking'
import CardList from '../components/cardList/CardList'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Heading from '../components/heading/Heading'
import MainHome from '../components/mainhome/MainHome'
import Review from '../components/review/Review'
import {MenuBg} from "../image/index"

export default function Home() {
    return (
        <div>
            <Header />
            <MainHome/>
            <About />
            <section className="menu" id="menu" style={{backgroundImage: `url${MenuBg}`}}>
                <Heading title="our menu" mainTitle="popular menu" />
                <CardList />
            </section>
            <Review />
            <Booking />
            <Footer />
        </div>
    )
}
