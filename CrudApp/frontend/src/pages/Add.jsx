import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    cover: "",
    price: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/");
    } catch (err) {
      console.log("Add Error", err);
    }
  };

  return (
    <div className="add-book">
      <h2>Add New Book</h2>
      <input
        type="text"
        name="title"
        id=""
        placeholder="Title"
        onChange={handleChange}
      />
      <input
        type="text"
        name="desc"
        id=""
        placeholder="Desc"
        onChange={handleChange}
      />
      <input
        type="text"
        name="cover"
        id=""
        placeholder="Cover"
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        id=""
        placeholder="Price"
        onChange={handleChange}
      />
      <button className="button" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};
