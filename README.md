# README

Welcome to Books! Books! Books!
-------
This app is a book collection tracker. You can add to, remove from, and edit items in your book hoard.

It uses React, as well as Semantic UI React and custom CSS for styling.

Run `npm install` then `npm start` to view the app.

Notes:
------
There are a few outstanding issues to be ironed out in future releases:
 1) Backend had connect issues (CORS) so used dummy data for testing and added console.logs within callback methods to indicate when the database was being updated via a fetch call. Will remove test data once CORS issue resolved.
 2) READ BOOKS - Cards currently render hardcoded test data for the book "Doctor Sleep." Need to update with books array data once my API is working properly.
 3) CREATE A BOOK - On form submit when adding a book, the page does not currently redirect to the home page so you must manually navigate to http://localhost:3000/api/books to see the newly-added book. The redirect action is forthcoming.
 4) UPDATE A BOOK - Logic is written, but still need to test to make sure selected book.id is the proper one. I will add a redirect to http://localhost:3000/api/books/:id so manual navigation is not needed.
 5) DELETE A BOOK - Implemented delete button on card but need to write the fetch method.


The backend is an Node.js/Express RESTful API. See that repository [here](https://github.com/koberlander/book-app/backend).
