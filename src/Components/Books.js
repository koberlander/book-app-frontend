import React from 'react'
import BookCard from './BookCard'

class Books extends React.Component {

  // review how to pass props down in plain react

  render(){
    return(
      {props.books && props.books.map(book => {
        <BookCard book={book} />
      }
    )}
    )
  }
}

export default Books
