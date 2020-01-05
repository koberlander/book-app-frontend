import React from 'react'
import {Button, Grid} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import BookCard from './BookCard'

const Books = (props) => {
// console.log('props: ', props);
  // review how to pass props down in plain react

  return(
    <div>
      <div>
        <Button
          color='olive'
          icon='plus'
          as={Link}
          to='/books/new'
        />
      </div>

    <Grid columns='six' divided='vertically'>
      <Grid.Row >
        {props.books.map((book) => <BookCard key={book.name} book={book} match={props.match}/>)}
      </Grid.Row>
    </Grid>

    </div>
  )
}

export default Books
