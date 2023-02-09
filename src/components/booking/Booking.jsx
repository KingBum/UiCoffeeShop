import React, { useContext,useRef } from 'react'
import Heading from '../heading/Heading'
import { BookBg } from '../../image/index'
import "./booking.css"
import { AuthContext } from '../../context/AuthContext'
import axios from "axios"

export default function Booking() {
    const user = useContext(AuthContext)
    const desc = useRef();
    const voted = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post("https://json-app-coffee.herokuapp.com/api/reviews/", {
            username : user.user._id,
            desc: desc.current.value,
            voted: voted.current.value,
          });
          res.data && window.location.replace("https://coffee-shop-kingbum.herokuapp.com/");    
        } catch (err) {
        }
      };

    return (
        <section className="book" id="book" style={{ backgroundImage: `url${BookBg}` }}>
            <Heading title="Feedback" mainTitle="Feedback" />
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="your name" className="box" />
                <input ref={voted} type="number" placeholder="Voted 1-5" className="box" />
                <textarea ref={desc} name="" placeholder="your message" className="box" id="" cols="30" rows="10"></textarea>
                {user.user ? <button type="submit" className="btn">send feedback</button> : <></>}
            </form>
        </section>
    )
}
