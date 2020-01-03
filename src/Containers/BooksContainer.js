import React from 'react'

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
      <div>Books Container</div>
    )
  }
}

export default BooksContainer
