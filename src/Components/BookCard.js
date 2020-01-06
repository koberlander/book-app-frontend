import React from 'react'
import {Link} from 'react-router-dom'
import {Grid, Card, Button} from 'semantic-ui-react'

class BookCard extends React.Component {


// delete book fetch method
  deleteBook = (bookId) => {
    console.log('Removing book with id: ', bookId);

  }

  render(){
    // debugger
    // WOULD USE CODE SIMILAR TO THIS TO FILL IN DYNAMIC CARD PROPERTIES BELOW (STILL NEED TO TEST THIS)
    let book = this.props.book? this.props.book : this.props.books.find(book => parseInt(book.id) === parseInt(this.props.match.params.id))
    //
    let bookId = book ? book.id : ''
    // let genre = book ? book.genre : ''
    // let title = book ? book.title : ''
    // let description = book ? book.description : ''

    let genre = 'Fiction'
    let title = 'Doctor Sleep'
    let description = 'Struggling with alcoholism, Dan Torrance remains traumatized by the sinister events that occurred at the Overlook Hotel when he was a child. His hope for a peaceful existence soon becomes shattered when he meets Abra, a teen who shares his extrasensory gift of the "shine."'

    return(
      <Grid.Column>
        <Card>
          <Card.Content header={title} />
          <Card.Content genre={genre} />
          <Card.Content description={description} />
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button as={Link} to={`/books/edit/${bookId}`}>Edit</Button>
              <Button onClick={(_) => {this.deleteBook(bookId)}}>Delete</Button>
            </div>
          </Card.Content>
        </Card>
      </Grid.Column>
    )
  }
}

export default BookCard
