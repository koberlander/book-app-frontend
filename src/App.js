import React from 'react';
import BooksContainer from './Containers/BooksContainer'
import BookInput from './Components/BookInput'

class App extends React.Component() {
  constructor(){
    super()

    this.state = {
      books: []
    }
  }

  // LOAD ALL BOOKS
  componentDidMount(){
    fetch('http://localhost:3000/api/books')
    .then(res => res.json())
    .then(allBooks => {
      this.setState({
        books: allBooks
      })
    })
  }

  // ADD A BOOK


  // EDIT A BOOK


  // DELETE A BOOK

  render(){
    return (
      <div className="App">
        <header className="books header">
            <h1>Books! Books! Books!</h1>
        </header>
          <BooksContainer books={this.props.books}/>
          <BookInput />
      </div>
    );
  }
}

export default App;
