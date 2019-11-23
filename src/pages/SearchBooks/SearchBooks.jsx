import React, { useState } from 'react';
import axios from 'axios'
import './SearchBooks.css'
import '../../../node_modules/bulma/css/bulma.css'

import Book from '../../components/Book/Book'
import BookDefault from '../../static/bookDefault.png'

const SearchBooks = () => {
  
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
            author:  item.volumeInfo.authors ? item.volumeInfo.authors[0] : 'Não Encontrado',
            pages: item.volumeInfo.pageCount ? item.volumeInfo.pageCount : '?',
            image: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : BookDefault
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

      <div className="App-header">
        <h1 className="App-header">Books Search</h1>
        <form className="search" onSubmit={getBook}>
          <input type="text" placeholder="type a book and press enter..." value={search} onChange={ event => setSearch(event.target.value) } />
        </form>
      </div>

      <div className="book">
      { books.map(book => <Book className="book" book={book} key={book.id} /> ) }
      </div>
      

    </div>
  )
}

export default SearchBooks;
