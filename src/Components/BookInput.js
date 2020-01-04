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

    handleSubmit = event => {
      event.preventDefault()

      // add book to our array of book objects
      this.addBook(this.state)


      // clear form upon submit
      this.setState({
        genre: '',
        title: '',
        description: ''
      })
    }
  // Note: Research how to make accessible labels in Semantic here: https://react.semantic-ui.com/collections/form/#shorthand-field-control-id
  render(){
    return(
      <div>
      <h2>Add a New Book</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Select
            fluid
            label='Genre'
            options={genreOptions}
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
            <Form.Input
              fluid
              label='Description'
              name='description'
              required
              value={this.state.description}
              onChange={this.handleChange}
              />
              <Button type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default BookInput
