import React from "react";
// import Book1 from "../Assets/books/book1.jpg";
// import Book2 from "../Assets/books/book2.jpg";
// import Book3 from "../Assets/books/book3.jpg";
import e from "../Assets/BooksA/the-trial.jpg";
// import ev from "../Assets/BooksA/fairy-tales.jpg";
import { FaStar } from "react-icons/fa6";
import "./Books.css";
import { Link } from "react-router-dom";


const Books = ({ booksData }) => {
    return (
        <>
            <div className="mt-14 mb-12">

                {/* <div className="header-div">

                    <h1>Top Books</h1>
                    <p className="text-xs">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Perspiciatis delectus architecto error nesciunt,
                    </p>
                </div> */}

                <div>
                    <div className="books-grid">
                        {booksData && booksData.map(({ id, imageLink, title, rating, author, price }) => (
                            <Link to={`/product/${id}`} >
                                <div key={id} className="book-item">
                                    <img
                                        src={`../Assets/BooksA${imageLink}`}
                                        alt="Loading image..."
                                    />

                                    <div className="info">
                                        <h2>{title}</h2>

                                        <div className="book-info">
                                            <p className="auth-p">{author}</p>

                                            <div className="rate-div auth-p">
                                                <span>{rating}</span>
                                                <span> </span>
                                                <FaStar className="text-yellow-500" />
                                            </div>
                                        </div>
                                        <p className="auth-p">{price}$</p>
                                    </div>
                                </div>
                            </Link>
                        ))}

                    </div>

                </div>
            </div >
        </>
    );
};

export default Books;
