import React, { useState } from 'react';
import axios from 'axios'
import './App.css'


const App = () => {
  
  const [books, setBook] = useState([])
  const [search, setSearch] = useState('')

  function getBook(event) {
    event.preventDefault();

    let book = search.trim()

    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=40`)
    .then(response => {

      if(response.data.totalItems){

        let books = response.data.items.map(item => {
          let book = {
            id: item.id,
            title: item.volumeInfo.title,
            pages: item.volumeInfo.pageCount ? item.volumeInfo.pageCount : '?',
            image: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.smallThumbnail : 'nf'
          }
          return book
        })

        setBook(books)
        return
      }

      alert('Book not found!')

    })
  }

  
  return (
    <div className="App">
      <h1 className="App-header">Book App!</h1>
      <form action="" onSubmit={getBook}>
        <input type="text" value={search} onBlur={getBook} onChange={ event => setSearch(event.target.value) } />
      </form>

      {
        books.map(book => {
          return   <div className="book" key={book.id}>
                    <h2 className="book-title">{ book.title }</h2>
                    <img className="book-image" src={book.image} alt="book_image"/>
                    <h5 className="book-pages">{ book.pages }</h5>
                    <hr/>
                  </div>
        })
      }

    </div>
  )
}

export default App;
