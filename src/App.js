import React from 'react';
import BooksContainer from './Containers/BooksContainer'
import BookInput from './Components/BookInput'

function App() {
  return (
    <div className="App">
      <header className="books header">
          <h1>Books! Books! Books!</h1>
      </header>
        <BooksContainer />
        <BookInput />
    </div>
  );
}

export default App;
