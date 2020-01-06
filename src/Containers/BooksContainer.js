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
    console.log('this.props: ', this.props);
    return(
      <div>
        <Books books={this.props.books} />
      </div>
    )
  }
}


export default BooksContainer
