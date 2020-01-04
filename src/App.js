import React from 'react';
import BooksContainer from './Containers/BooksContainer'
import BookInput from './Components/BookInput'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Books! Books! Books!
      </header>
        <BooksContainer />
        <BookInput />
    </div>
  );
}

export default App;
