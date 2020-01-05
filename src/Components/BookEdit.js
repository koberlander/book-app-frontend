import React from 'react'
import {Form, Button} from 'semantic-ui-react'
import {genreOptions} from '../GenreOptions'

class BookEdit extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      id: props.book.id,
      genre: props.book.genre,
      title: props.book.title,
      description: props.book.description,
      updatedBook: null
    }
  }

  handleChange = (event, book) => {
    console.log('Changing book now.');
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  editBook = () => {
    console.log('Saving changes to book now...');

    // Collect new data from form
    let putBook = {
      id: this.state.id,
      genre: this.state.genre,
      title: this.state.title,
      description: this.state.description
    }


    fetch(`http://localhost:3000/api/v1/books/${this.state.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(putBook)
    })
    .then(res => res.json())
    .then(adaptedBook => {
      this.setState({
        updatedBook: adaptedBook
      }, () => {this.props.editBooksView(adaptedBook)})
    })
  }

  render(){
    return(
      <div>
        <h3 class='add book title' >Edit a Book</h3>
          <Form onSubmit={(_) => this.editBook()}>
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
