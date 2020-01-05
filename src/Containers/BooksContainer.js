import React from 'react'
import Books from '../Components/Books'

class BooksContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      books: []
    }
  }

  render(){
    // debugger
    return(
      <Books books={this.props.books} />
    )
  }
}


export default BooksContainer
