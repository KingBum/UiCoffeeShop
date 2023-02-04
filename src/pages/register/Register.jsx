import React from 'react'
import Header from '../../components/header/Header'
import Heading from '../../components/heading/Heading'
import Footer from '../../components/footer/Footer'
import { BookBg } from '../../image/index'
import "./register.css"
import { useRef } from "react";
import axios from "axios"


export default function Register() {
    const username = useRef();
    const password = useRef();

    const handleClick = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post("/auth/register", {
            username: username.current.value,
            password: password.current.value,
          });
          res.data && window.location.replace("/login");    
        } catch (err) {
        }
      };

    return (
        <>
            <Header />
            <section className="book register" id="book" style={{ backgroundImage: `url${BookBg}` }}>
                <Heading title="Register" mainTitle="Register" />
                <form onSubmit={handleClick}>
                    <input ref={username} type="text" placeholder="username" className="box" />
                    <input ref={password} type="password" placeholder="your password" className="box" />
                    <button type="submit" className="btn">Register</button>
                </form>
            </section>
            <Footer />
        </>
    )
}
