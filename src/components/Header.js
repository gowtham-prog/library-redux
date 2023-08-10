import React from "react";
import { Link } from 'react-router-dom';

const Header = ()=>{
  let links = [
    {name : "All Books", link : ""},
    {name : "Wishlist", link : "/wishlist"},
    {name : "Favourites", link : "/favourites"},
    {name : "Add Book", link: "/addbook"},
  ];
return(
 <div>
  <div className=" shadow-xl w-full fixed top-0 left-0">
    <div className="md:flex items-center justify-between py-4 text-blue-400 bg-slate-800 ">
      <div className=" font-bold text-2xl cursor-pointer flex items-center text-blue-400">
        <span className="text-3xl text-sky-400 mr-1 pt-2">
        <ion-icon name="book-outline"></ion-icon>
        </span>
        Library
      </div>
      <ul className = "md:flex md:items-center justify-between ml-10">
        {
          links.map((link,index)=>(
            <li key= {index} className = 'md:ml-8 text-lg '>
                <Link to= {link.link} className="text-rose-50 hover:text-blue-600 duration-500">{link.name}</Link>
            </li>
          )) 
        }
      </ul>
    </div>
  </div>
  </div>
);
}
export default Header;