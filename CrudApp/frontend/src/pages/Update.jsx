import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export const Update = () => {
  const [book, setBook] = useState({
    id: null,
    title: "",
    desc: "",
    cover: "",
    price: null,
  });

  const navigate = useNavigate();
  const location = useLocation();
  const bookId = location.pathname.split("/")[2];

  useEffect(() => {
    fetchBookById(bookId);
  }, [bookId]);

  const fetchBookById = async (bookId) => {
    try {
      const res = await axios.get(`http://localhost:8800/books/${bookId}`);
      setBook(res.data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8800/books/" + bookId, book);
      navigate("/");
    } catch (err) {
      console.log("Update Error", err);
    }
  };

  return (
    <div className="update-book">
      <h2>Update Book</h2>
      <input
        type="text"
        name="title"
        id=""
        placeholder="Title"
        value={book.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="desc"
        id=""
        placeholder="Desc"
        value={book.desc}
        onChange={handleChange}
      />
      <input
        type="text"
        name="cover"
        id=""
        placeholder="Cover"
        value={book.cover}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        id=""
        placeholder="Price"
        value={book.number}
        onChange={handleChange}
      />
      <button className="button" onClick={handleClick}>
        Update
      </button>
    </div>
  );
};
