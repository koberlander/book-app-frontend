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
 2) On form submit when editing or adding a book, the page does not currently redirect to the home page so you must manually navigate to http://localhost:3000/api/books to see the changes. The redirect action is forthcoming.
 3) React Router with a Switch statement has not been implemented yet so all routes are visible at one time. This mixing bowl of component goodness will resolve once the router is added and, at that time, the user can also view a single book (http://localhost:3000/api/books/:id).

The backend is a Node.js RESTful API. See that repository [here](https://github.com/koberlander/book-app).
