import React from 'react'
import {Button, Grid} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import BookCard from './BookCard'

const Books = (props) => {
// console.log('props: ', props);

// RENDER ADD BOOK BUTTON. .MAP OVER BOOKS ARRAY AND RENDER EACH BOOK IN A BOOKCARD
  return(
    <div>
      <div>
        <Button
          color='olive'
          as={Link}
          to='/books/new'>
          Add
        </Button>
      </div>

    <Grid columns='three' divided='vertically'>
      <Grid.Row >
        {props.books.map((book) => <BookCard key={book.id} book={book} match={props.match}/>)}
      </Grid.Row>
    </Grid>

    </div>
  )
}

export default Books
