import React from 'react'
import {Form, Button} from 'semantic-ui-react'

class BookInput extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      genre: '',
      title: '',
      description: ''
    }

    // handleChange = event => {
    //   //update state
    // }
  }
  // Note: Research how to make accessible labels in Semantic here: https://react.semantic-ui.com/collections/form/#shorthand-field-control-id
  render(){
    return(
      <div>
        <Form>
          <Form.Select
            fluid
            label='Genre'
            
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
