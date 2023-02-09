import React from 'react'
import Header from '../../components/header/Header'
import Heading from '../../components/heading/Heading'
import Footer from '../../components/footer/Footer'
import { BookBg } from '../../image/index'
import "./create.css"
import { useState } from "react";
import axios from "axios";


export default function Create() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      title,
      price,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newProduct.img = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) { }
    }
    try {
      await axios.post("/products", newProduct);
      window.location.replace("https://coffee-shop-kingbum.herokuapp.com/");
    } catch (err) { }
  };
  return (
    <>
      <Header />
      <section className="book register" id="book" style={{ backgroundImage: `url${BookBg}` }}>
        <Heading title="Create" mainTitle="Create" />
        <div className="mainCreate">
          {file && (
            <img className="createImg" src={URL.createObjectURL(file)} alt="" />
          )}
          <form onSubmit={handleSubmit}>
            <label htmlFor="file" className="Options">
                <img
                  className="imgCreateInput"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1200px-Picture_icon_BLACK.svg.png"
                  alt=""
                />
                <input
                  className="box"
                  style={{ display: "none" }}
                  type="file"
                  id="file"
                  accept=".png,.jpeg,.jpg"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </label>
            <input onChange={e=>setTitle(e.target.value)} type="text" placeholder="Title" className="box" />
            <input onChange={e=>setPrice(e.target.value)} type="text" placeholder="Price" className="box" />
            <input onChange={e=>setDesc(e.target.value)} type="text" placeholder="Desc" className="box" />
            <button type="submit" className="btn createBtn">Create</button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  )
}
