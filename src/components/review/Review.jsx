import React, {useEffect, useState} from 'react'
import Heading from '../heading/Heading'
import "./review.css"
import CardReview from '../shared/CardReview'
import axios from "axios"

export default function Review() {
    const [reivews, setReviews] = useState([])
    console.log(reivews)
    useEffect(() => {
        const fetchPosts = async () => {
          const res1 = await axios.get("/reviews/").then(res => setReviews(res.data))
        //   setReviews(covert.sort((p1,p2) => {
        //     return new Date(p2.createdAt) - new Date(p1.createdAt)
        //   }))
        }
        fetchPosts()
      }, [])

    return (
        <section className="review" id="review">
            <Heading title="reviews" mainTitle="what people says" />
            <div className="swiper review-slider">
                <div className="swiper-wrapper">
                    {console.log(typeof(reivews))}
                    {reivews.slice(0,3).map((item, index) =>(
                        <CardReview key={index} userReview={item} />
                    ))}
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </section>
    )
}
