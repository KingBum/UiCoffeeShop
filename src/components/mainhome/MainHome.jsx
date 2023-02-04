import React from 'react'
import { HomeBg, HomeImg1 } from '../../image/index'
import "./mainhome.css"

export default function MainHome() {
    return (
        <section className="home" id="home" style={{ backgroundImage: `url${HomeBg}` }}>
            <div className="row">
                <div className="content">
                    <h3>fresh coffee in the morning</h3>
                    <div className="btn">buy one now</div>
                </div>
                <div className="image">
                    <img src={HomeImg1} className="main-home-image" alt="" />
                </div>
            </div>
        </section>
    )
}
