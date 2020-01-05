import React from 'react'
import {Form, Button} from 'semantic-ui-react'
import {genreOptions} from '../GenreOptions'

class BookInput extends React.Component {
  constructor(props){
    super(props)

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
    addBook = () => {
      console.log('Adding a book. One moment...');
      fetch('http://localhost:3000/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          genre: '',
          title: '',
          description: ''
        })
      })
    }

  /*
     Note: Double check how to submit a dropdown selection to API.
     Also, research how to make accessible labels in Semantic here:
     https://react.semantic-ui.com/collections/form/#shorthand-field-control-id
  */
  render(){
    return(
      <div>
      <h3 class='add book title'>Add a New Book</h3>
        <Form onSubmit={() => this.addBook()}>
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

export default BookInput
