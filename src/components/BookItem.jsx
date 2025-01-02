/*import React from "react";

const BookItem = ({ book }) => {
  return (
    <div className="flex flex-col justify-between w-64 p-4 bg-white rounded-lg shadow-md h-80">
      <h3 className="font-bold">{book.volumeInfo.title}</h3>
      <p>{book.volumeInfo.authors?.join(", ")}</p>
      <img
        src={book.volumeInfo.imageLinks?.thumbnail}
        alt={book.volumeInfo.title}
      />
    </div>
  );
};

export default BookItem;*/

/*import React from "react";

const BookItem = ({ book }) => {
  return (
    <div className="flex flex-col justify-between w-64 p-4 rounded-lg shadow-md bg-cyan-600 h-flex bg-gradient-to-r from-[#fff2dc] to-[#d6c6bb]">
      <div>
        <h2 className="mx-auto text-xl font-bold ">{book.volumeInfo.title}</h2>
        <p className="text-gray-700">{book.volumeInfo.authors?.join(", ")}</p>
      </div>
      <div className="flex-grow">
        <img
          className="object-cover w-full h-[350px] mt-4"
          src={book.volumeInfo.imageLinks?.thumbnail}
          alt={book.volumeInfo.title}
        />
      </div>
    </div>
  );
};

export default BookItem;*/

import React from "react";

const BookItem = ({ book }) => {
  return (
    <div className="flex flex-col justify-between w-48 h-64 p-2 bg-[#D7D3BF] rounded-lg shadow-md">
      <div>
        <h2 className="font-bold text-md">{book.volumeInfo.title}</h2>
      </div>
      <div className="flex-none h-32 mt-2">
        <div className="w-full h-full overflow-hidden rounded-lg">
          <img
            className="object-contain w-full h-full"
            src={book.volumeInfo.imageLinks?.thumbnail}
            alt={book.volumeInfo.title}
          />
        </div>
      </div>
      <div>
        <p className="mt-2 text-gray-700">
          {book.volumeInfo.authors?.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default BookItem;

//className="flex flex-col justify-between w-48 h-64 p-2 rounded-lg bg-gradient-to-r from-[#b2b5b3] to-[#bed4cb] shadow-md"
