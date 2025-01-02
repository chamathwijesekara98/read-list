/*import React from "react";
import BookItem from "./BookItem";

const BookList = ({ books }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;*/

import React from "react";
import BookItem from "./BookItem";

const BookList = ({ books }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
