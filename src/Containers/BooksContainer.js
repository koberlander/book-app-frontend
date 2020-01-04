import React from 'react'
import Books from '../Components/Books'
import booksArray from '../books'

class BooksContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      books: []
    }
  }

// COMMENTED OUT SO THAT I COULD IMPORT booksArray
  // componentDidMount(){
  //   fetch('http://localhost:3000/api/books')
  //   .then(res => res.json())
  //   .then(allBooks => {
  //     this.setState({
  //       books: allBooks
  //     })
  //   })
  // }

  render(){
    // debugger
    return(
      <Books books={this.props.booksArray} />
    )
  }
}


export default BooksContainer
