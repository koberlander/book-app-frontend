import React from 'react'
import {Card} from 'semantic-ui-react'

class BookCard extends React.Component {


// delete fetch

// delete DOM update

// edit will {Link} to BookEdit

  render(){
    // WOULD USE CODE LIKE THIS TO FILL IN CARD BELOW
    // let book = this.props.book? this.props.book : this.props.books.find(book => parseInt(book.id) === parseInt(this.props.match.params.id))
    //
    // let bookId = book ? book.id : ''
    // let genre = book ? book.genre : ''
    // let title = book ? book.title : ''
    // let description = book ? book.description : ''
    let genre = 'Fiction'
    let title = 'Doctor Sleep'
    let description = 'Struggling with alcoholism, Dan Torrance remains traumatized by the sinister events that occurred at the Overlook Hotel when he was a child. His hope for a peaceful existence soon becomes shattered when he meets Abra, a teen who shares his extrasensory gift of the "shine."'

    return(
      <Card>
        <Card.Content header={title} />
        <Card.Content genre={genre} />
        <Card.Content description={description} />
        <Card.Content extra>

    </Card.Content>
  </Card>
    )
  }
}

export default BookCard
