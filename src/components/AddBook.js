
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddBook = () => {
  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');
  const [id, setId] = useState('');

  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      name: bookName,
      author: author,
      id: id,
      fav: false,
      wish: false,
    };

    dispatch({ type: 'ADD_BOOK', payload: newBook });

    setBookName('');
    setAuthor('');
    setId('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      
      <div className="mb-6">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book Name</label>
        <input
          type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="The Associate" required value={bookName} onChange={(e) => setBookName(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="author" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author</label>
        <input
          type="text" id="author" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Grisham" required value={author} onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID</label>
        <input
          type="text" id="id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123" required value={id} onChange={(e) => setId(e.target.value)}
        />
      </div>
      
    
      <div className="flex justify-center">
        <button type="submit" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add Book
          </span>
        </button>
      </div>
    </form>
  );
};

export default AddBook;
