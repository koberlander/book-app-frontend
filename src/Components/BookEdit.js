import React from 'react'
import {Form, Button} from 'semantic-ui-react'
import {genreOptions} from '../GenreOptions'

class BookEdit extends React.Component {

  constructor(){
    super()

    // figure out how to pull existing info on selected book
    this.state = {
      genre: '',
      title: '',
      description: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // need to doublecheck body format
  editBook = (bookId, formValues) => {
    console.log('Editing selected book now...');
    fetch(`http://localhost:3000/api/v1/books/${bookId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({

      })
    })
  }

  render(){
    return(
      <div>
        <h3 class='add book title' >Edit a Book</h3>
          <Form onSubmit={(_) => this.editBook(bookId, formdata)}>
            <Form.Select
              fluid
              label='Genre'
              options={genreOptions}
              required
              placeholder='Select a Genre'
            />
            <Form.Input
              fluid
              label='Title'
              name='title'
              required
              value={this.state.title}
              onChange={this.handleChange}
              />
              <Form.TextArea
                fluid
                label='Description'
                name='description'
                required
                value={this.state.description}
                onChange={this.handleChange}
                />
              <Button color='ui olive button' type='submit'>Submit</Button>
          </Form>
        </div>
    )
  }
}

export default BookEdit
