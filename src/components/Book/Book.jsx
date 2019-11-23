import React from  'react'
import './Book.css'

const Book = (props) => {

    let { title, image, pages, author } = props.book;
    return(
        <div className="book-item">
            <img src={image} alt="book Image" className="book-image"/>
            <p className="book-title">{ title }</p>
            <p className="book-author">{ author }</p>
            <p className="book-pages">{ pages } páginas</p>
        </div>
    )
} 

export default Book;