import { useRef, useContext } from "react";
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Heading from '../../components/heading/Heading'
import { BookBg } from '../../image/index'
import "./login.css"
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import {Link} from "react-router-dom"

export default function Login() {
    const username = useRef();
    const password = useRef();
    const { dispatch } = useContext(AuthContext);

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
          const res = await axios.post("https://json-app-coffee.herokuapp.com/api/auth/login", {
            username: username.current.value,
            password: password.current.value,
          });
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
          dispatch({ type: "LOGIN_FAILURE", payload: err });
        }
      };

    return (
        <>
            <Header />
            <section className="book login" id="book" style={{ backgroundImage: `url${BookBg}` }}>
                <Heading title="Login" mainTitle="Login" />
                <form  onSubmit={handleClick}>
                    <input ref={username} type="text" placeholder="username" className="box" />
                    <input ref={password} type="password" placeholder="your password" className="box" />
                    <div>
                      <button type="submit" className="btn">Login</button>
                    </div>
                    <div className="Or">Or</div>
                    <Link to="/register" className="link">
                      <button className="btn">Register</button>
                    </Link>
                </form>
            </section>
            <Footer />
        </>
    )
}
