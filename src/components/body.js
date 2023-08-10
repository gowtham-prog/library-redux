import React from "react";
import Header from "./Header";
import Book from './Book';
import AddBook from "./AddBook";
import { useSelector } from 'react-redux';


const Body = (props) => {
  const books = useSelector(state => state.books);
 
const neww = books.filter(function(el){
    return el.wish
})
const newf = books.filter(function(el){
    return el.fav
})

  let valu = props.mode;
  console.log(valu);

  if (valu === "All Books") {
    return (
    <div>
      <div className="shadow-xl ml-auto mr-auto mb-auto rounded-xl items-center bg-slate-400 h-max w-4/6">
        <h1 className="text-3xl font-bold items-center text-center">{valu}</h1>
        <Book books={books} />
      </div><br></br>
      </div>
    );
  }

  if (valu === "Add Book") {
    return (
        <div>
      <div className="shadow-xl ml-auto mr-auto rounded-xl items-center bg-slate-400 h-screen w-4/6">
        <h1 className="text-3xl font-bold items-center text-center">{valu}</h1>
        <AddBook  />
      </div><br></br>
      </div>
    );
  }

  if (valu === "Favourites") {
    return (
        <div>
      <div className="shadow-xl ml-auto mr-auto md:2 rounded-xl items-center bg-slate-400 h-screen w-4/6">
        <h1 className="text-3xl font-bold items-center text-center">{valu}</h1>
        <Book books={newf} />
      </div> <br></br>
      </div>
    );
  }

  if (valu === "Wishlist") {
    return (
        <div>
      <div className="shadow-xl ml-auto mr-auto mb-auto rounded-xl items-center bg-slate-400 h-screen w-4/6">
        <h1 className="text-3xl font-bold items-center text-center">Wishlist</h1>
        <Book books={neww} />
      </div><br></br>
      </div>
    );
  }
};

export default Body;
