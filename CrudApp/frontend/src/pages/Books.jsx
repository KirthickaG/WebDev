import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles.css";

export const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/books/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="books-page">
      <h1>Winci Book Store</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book">
            {book.cover && <img src={book.cover} alt="" />}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>{book.price}</span>
            <div>
              <button
                className="button delete"
                onClick={() => handleDelete(book.id)}
              >
                Delete
              </button>
              <button className="button update">
                <Link to={`/update/${book.id}`}>Update</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="button">
        <Link className="add" to="/add">
          Add Book
        </Link>
      </button>
    </div>
  );
};
