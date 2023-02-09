import React, { useContext } from 'react'
import "./header.css"
import { AuthContext } from "../../context/AuthContext";
import {Link} from "react-router-dom"

export default function Header() {
    const user = useContext(AuthContext)

    const handleLogout = () => {
        localStorage.removeItem("user")
        window.location.replace("https://coffee-shop-kingbum.herokuapp.com/")
    }

    return (
        <header className="header">
            <div id="menu-btn" className="fas fa-bars"></div>
            <Link className='link' to="/">
                <div className="logo"> coffee <i className="fas fa-mug-hot"></i> </div>
            </Link>
            <nav className="navbar">
                <div>home</div>
                <div>about</div>
                <div>menu</div>
                <div>review</div>
                <div>book</div>
                {user.user?.isAdmin ? <Link to="/adminboard" className='link'>
                    <div>AdBoard</div>
                </Link> : <></>} 
            </nav>
            <div className='rightNavbar'>
                {user.user ? (<div className='checkUser'>
                    <div className="boxUser">
                        <img className='avatar' src='https://static1.cafeland.vn/cafelandData/upload/tintuc/thitruong/2017/01/tuan-03/donaldtrump-cre-joe-raedle-getty-image-1484833929.jpg' alt='' />
                        <span>{user.user.username || "Anonymous"}</span>
                    </div>
                    <div onClick={handleLogout} className="btn">LOGOUT</div>
                </div>) : <Link className='link' to="/login">
                <div className="btn">Login for book a table</div></Link>}
            </div>
        </header>
    )
}
