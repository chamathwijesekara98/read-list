import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import Header from "./components/Header";
import DetailFooter from "./components/DetailFooter";
import Footer from "./components/Footer";
import { fetchBooks } from "./utils/api";
import DialogBox1 from "./components/DialogBox1";
import DialogBox2 from "./components/DialogBox2";

const App = () => {
  const [books, setBooks] = useState([]);

  // Fetch default books on initial load
  useEffect(() => {
    const fetchDefaultBooks = async () => {
      const defaultBooks = await fetchBooks("fiction"); // Example query for default books
      setBooks(defaultBooks);
    };
    fetchDefaultBooks();
  }, []);

  const handleSearch = async (query) => {
    const results = await fetchBooks(query);
    setBooks(results);
  };

  return (
    <div className="bg-[#ffffff] min-h-screen flex flex-col">
      <Header className="container " />
      <dev>
        <SearchBar container onSearch={handleSearch} />
      </dev>
      <div className="flex justify-center p-4 space-x-4">
        <DialogBox2 className="inline-block" />
        <DialogBox1 className="inline-block" />
      </div>
      <BookList books={books} />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
