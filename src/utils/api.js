const API_KEY = "AIzaSyAf_ZFsno4ywYmks8teojBRuGXl4TUJl1U"; // Replace with your Google Books API key

export const fetchBooks = async (query) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`
  );
  const data = await response.json();
  return data.items || [];
};
