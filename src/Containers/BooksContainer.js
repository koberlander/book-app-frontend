import React from 'react'
import Books from '../Components/Books'

class BooksContainer extends React.Component {

  state = {
    books: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/books/')
    .then(res => res.json())
    .then(books => {
      this.setState({
      })
    })
  }

  render(){
    return(
      <Books books={this.props.books} />
    )
  }
}


export default BooksContainer
