import React from 'react'
import Heading from '../heading/Heading'
import "./about.css"
import { AboutIcon1,AboutIcon2,AboutIcon3,} from "../../image/index"

export default function About() {
  return (
    <section className="about" id="about">
                <Heading title="about us" mainTitle="why choose us" />
                <div className="row">
                    <div className="image">
                        <img src="http://file.hstatic.net/1000075078/file/career1.jpg" alt="" />
                    </div>
                    <div className="content">
                        <h3 className="title">what's make our coffee special!</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse et commodi, ad, doloremque obcaecati maxime quam minima dolore mollitia saepe quos, debitis incidunt. Itaque possimus adipisci ipsam harum at autem.</p>
                        <div className="btn">read more</div>
                        <div className="icons-container">
                            <div className="icons">
                                <img src={AboutIcon1} alt="" />
                                <h3>quality coffee</h3>
                            </div>
                            <div className="icons">
                                <img src={AboutIcon2} alt="" />
                                <h3>our branches</h3>
                            </div>
                            <div className="icons">
                                <img src={AboutIcon3} alt="" />
                                <h3>free delivery</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}
