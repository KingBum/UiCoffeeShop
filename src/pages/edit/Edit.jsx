import React from "react";
import Header from "../../components/header/Header";
import Heading from "../../components/heading/Heading";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import axios from "axios";
import "../create/create.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Edit() {
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [img, setImg] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;


  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `https://json-app-coffee.herokuapp.com/api/products/${location.pathname.split("/")[2]}`
      );
      setDesc(res.data.desc)
      setTitle(res.data.title)
      setPrice(res.data.price)
      setImg(res.data.img)
    };
    fetchPosts();
  }, [location.pathname]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      title,
      price,
      desc,
      isAdmin: user.isAdmin,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newProduct.img = filename;
      try {
        await axios.post("https://json-app-coffee.herokuapp.com/api/upload", data);
      } catch (err) {}
    }
    try {
      await axios.put(
        `https://json-app-coffee.herokuapp.com/api/products/${location.pathname.split("/")[2]}`,
        newProduct
      );
      window.location.replace("/adminboard");
    } catch (err) {}
  };

  return (
    <>
      <Header />
      <section className="book register" id="book">
        <Heading title="Edit" mainTitle="Edit" />
        <div className="mainCreate">
          {file && (
            <img className="createImg" src={URL.createObjectURL(file)} alt="" />
          )}
          <form onSubmit={handleSubmit}>
            <label htmlFor="file" className="Options">
              <img
                className="imgCreateInput"
                src={PF + img}
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
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder={title}
              className="box"
            />
            <input
              onChange={(e) => setPrice(e.target.value)}
              type="text"
              placeholder={price}
              className="box"
            />
            <input
              onChange={(e) => setDesc(e.target.value)}
              type="text"
              placeholder={desc}
              className="box"
            />
            <button type="submit" className="btn createBtn">
              Edit
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
