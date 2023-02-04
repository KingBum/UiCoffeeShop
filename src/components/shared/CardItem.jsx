import React from 'react'

export default function CardItem({item}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <div className="box">
            <img src={PF + item.img} alt="" />
            <div className="content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span>$ {item.price}</span>
            </div>
        </div>
    )
}
