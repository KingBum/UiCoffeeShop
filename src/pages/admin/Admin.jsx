import React, { useEffect, useState } from "react";
import "./admin.css";
import Header from "../../components/header/Header";
import Heading from "../../components/heading/Heading";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export default function Admin() {
  const { user } = useContext(AuthContext);
  const [menu, setMenu] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/products/${id}`, {
        data: { isAdmin: user.isAdmin },
      });
      window.location.replace("/adminboard");
    } catch (err) {}
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/products/");
      setMenu(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, []);

  return (
    <div className="admin">
      <div className="wrapperAdmin">
        <Header />
        <Heading title="Admin Board" mainTitle="Admin Board" />
        <Link to="/create">
            <button className="btn">New Product</button>
        </Link>
        <table className="adminTable">
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Desc</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
          {menu.map((item, index) => (
            <tr key={index}>
              <td>
                <img className="adminImage" src={PF + item.img} alt="" />
              </td>
              <td>{item.title}</td>
              <td>{item.desc}</td>
              <td>${item.price}</td>
              <td className="actions">
                <Link to={`/editItem/${item._id}`}>
                    <button className="edit">Edit</button>
                </Link>
                <button
                  className="delete"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <Footer />
    </div>
  );
}
