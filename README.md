# ReadList
ReadList is a web application built with React and Vite that retrieves book details from the Google Books API and displays them as a list on the main page.

<img width="1440" alt="Screenshot 2025-01-02 at 3 11 08 PM" src="https://github.com/user-attachments/assets/e5fecd7a-b5a8-491a-928b-68298054ea9b" />




## It is live here.

https://chamathwijesekara98.github.io/read-list/

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Scripts](#scripts)
- [License](#license)

## Features

- Search for books using the Google Books API
- View book details including title, authors, and cover image
- Responsive design with Tailwind CSS
- Customizable components with Chakra UI

## folder structure

src/
App.jsx
assets/
components/
BookItem.jsx
BookList.jsx
DetailFooter.jsx
DialogBox1.jsx
DialogBox2.jsx
Footer.jsx
Header.jsx
SearchBar.jsx
index.css
index.jsx
main.jsx
utils/
api.js
.gitignore
eslint.config.js
index.html
package.json
postcss.config.js
README.md  
tailwind.config.js
vite.config.js

Sure, I'll correct the folder and file structure based on your project. Here is the updated

README.md

file:

````md
# ReadList

ReadList is a web application built with React and Vite that allows users to search for books using the Google Books API. The application provides a user-friendly interface to search for books, view book details, and get book recommendations.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Scripts](#scripts)
- [License](#license)

## Features

- Search for books using the Google Books API
- View book details including title, authors, and cover image
- Responsive design with Tailwind CSS
- Customizable components with Chakra UI

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/read-list.git
   cd read-list
   ```
````

2. Install the dependencies:

   ```sh
   npm install
   ```

## Usage

1. Start the development server:

   ```sh
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```
.DS_Store
.gitignore
eslint.config.js
index.html
package.json
postcss.config.js
README.md
src/
  .DS_Store
  App.jsx
  assets/
  components/
    BookItem.jsx
    BookList.jsx
    DetailFooter.jsx
    DialogBox1.jsx
    DialogBox2.jsx
    Footer.jsx
    Header.jsx
    SearchBar.jsx
  index.css
  index.jsx
  main.jsx
  utils/
    api.js
tailwind.config.js
vite.config.js
```

- [`src`](src): Contains the source code for the application
  - `components/`: Contains React components used in the application
  - `utils/`: Contains utility functions such as API calls
  - `assets/`: Contains static assets such as images
  - [`src/App.jsx`](src/App.jsx): Main application component
  - [`src/main.jsx`](src/main.jsx): Entry point for the React application
  - [`src/index.css`](src/index.css): Global CSS file
- [`index.html`](index.html): Main HTML file
- [`tailwind.config.js`](tailwind.config.js): Tailwind CSS configuration file
- [`vite.config.js`](vite.config.js): Vite configuration file

## Dependencies

- React
- Vite
- Tailwind CSS
- Chakra UI
- Google Books API

## Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the application for production
- `npm run lint`: Run ESLint to check for code quality
- `npm run preview`: Preview the production build
- `npm run deploy`: Deploy the application to GitHub Pages

## License

This project is licensed under the MIT License.

