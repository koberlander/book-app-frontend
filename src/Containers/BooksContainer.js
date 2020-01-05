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
      <div>
        <Books books={this.props.books} />
      </div>
    )
  }
}


export default BooksContainer
