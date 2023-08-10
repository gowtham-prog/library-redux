
import { createStore } from 'redux';

const initBooks = [
    {
      id: 1,
      name: "Shoedog",
      author: "Paul knight",
      fav: false,
      wish: true,
    },
    {
      id: 2,
      name: "The alchemist",
      author: "paulo coehello",
      fav: true,
      wish: false,
    },
    {
      id: 3,
      name: "Steve Jobs",
      author: "Steve jobs",
      fav: false,
      wish: false,
    } ,
     {
      id: 4,
      name: "The Intelligent Investor",
      author: "Warren Buffet",
      fav: false,
      wish: false,
    },
      {
      id: 5,
      name: "Wings Of Fire",
      author: "A.P.J Abdul Kalam",
      fav: false,
      wish: false,
    }
  ];

const initialState = {
  books: initBooks,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case 'TOGGLE_FAV':
    case 'TOGGLE_WISH':
      const updatedBooks = state.books.map(book => {
        if (book.id === action.payload) {
          return { ...book, [action.type === 'TOGGLE_FAV' ? 'fav' : 'wish']: !book[action.type === 'TOGGLE_FAV' ? 'fav' : 'wish'] };
        }
        return book;
      });
      return {
        ...state,
        books: updatedBooks,
      };
    default:
      return state;
  }
};

const store = createStore(bookReducer);

export default store;
