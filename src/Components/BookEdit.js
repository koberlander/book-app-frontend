import React from 'react'
import {Fragment, Form} from 'semantic-ui-react'

class BookEdit extends React.Component {

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // pass in bookId and form values
  // NOT FINISHED
  editBook = (bookId, formValues) => {
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
      <Fragment>
        <div>
          1) Pass down props for selected book into my form
          2) Call editBook on form submit
        </div>

        <Form>

        </Form>

      </Fragment>
    )
  }
}

export default BookEdit
