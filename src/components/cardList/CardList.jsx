import React, {useEffect, useState} from 'react'
import "./cardlist.css"
import CardItem from '../shared/CardItem'
import axios from "axios"

export default function CardList() {
    const [menu, setMenu] = useState([])
    console.log(menu)
    useEffect(() => {
        const fetchPosts = async () => {
          const res = await axios.get("/products/")
          const covert = res.data.json()
          setMenu(covert.sort((p1,p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt)
          }))
        }
        fetchPosts()
      }, [])

    return (
        <div className="cardlist">
            <div className="box-container">
                {console.log(typeof(menu))}
                {menu.map((item, index) => (
                    <CardItem key={index} item={item} />
                ) )}
            </div>
        </div>
    )
}
