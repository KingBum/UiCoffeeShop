import React, {useEffect, useState} from 'react'
import "./cardlist.css"
import CardItem from '../shared/CardItem'
import axios from "axios"

export default function CardList() {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
          const res = await axios.get("/products/")
          setMenu(res.data)
        }
        fetchPosts()
      }, [])

    return (
        <div className="cardlist">
            <div className="box-container">
              {typeof(menu)}
                {menu.map((item, index) => (
                    <CardItem key={index} item={item} />
                ) )}
            </div>
        </div>
    )
}
