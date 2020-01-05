import React from 'react';
import {Route, Switch} from 'react-router-dom'
import BooksContainer from './Containers/BooksContainer'
import BookInput from './Components/BookInput'
import BookEdit from './Components/BookEdit'

class App extends React.Component {
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


  // EDIT BOOKS VIEW
  editBooksView = (edits) => {
    // Make a copy of books to manipulate
    let booksCopy = [...this.state.books]

    // Locate the book that needs to be updated
    let bookIndex = this.state.books.findIndex(b => b.id === edits.id)

    // Locate the index in array where selected book is, remove that book, and replace it with the new information.
    booksCopy.splice(bookIndex, 1, edits)

    // update state to include this new change
    this.setState({
      books: booksCopy
    })
  }


// NEED TO ADD NAVBAR COMPONENT
  render(){
    return (
      <div className="App">
        <header className="books header">
            <h1>Books! Books! Books!</h1>
        </header>

        <Switch>
        <Route exact path='/books/:id/edit' render={(props) => {
          let bookId = props.match.params.id
          let foundBook = this.state.books.find(book => book.id === bookId)

            return (
                <BookEdit book={foundBook} editBooksView={this.editBooksView} />
              )}}/>

          <Route path='/books/new' render={(props) => <BookInput {...props}/>}/>

          <Route exact path='/' render={() => {return (<BooksContainer books={this.state.books} />)}} />

        </Switch>
      </div>
    );
  }
}

export default App;
