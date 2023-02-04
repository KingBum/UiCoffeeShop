import React from 'react'

export default function CardReview({userReview}) {

    console.log(userReview)
    return (
        <div className="swiper-slide box">
            <i className="fas fa-quote-left"></i>
            <i className="fas fa-quote-right"></i>
            <img src={userReview.username?.avatar || "https://static1.cafeland.vn/cafelandData/upload/tintuc/thitruong/2017/01/tuan-03/donaldtrump-cre-joe-raedle-getty-image-1484833929.jpg"} alt="" />
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
            <p>{userReview.desc}</p>
            <h3>{userReview.username.username}</h3>
            <span>satisfied client</span>
        </div>
    )
}
