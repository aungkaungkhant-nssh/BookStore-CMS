import React from 'react';
import './Navbar.css'
import {Link } from "react-router-dom";
import { useLocation } from "react-router-dom"
function Navbar() {
    const location = useLocation();
    const links=[
        {
            id:1,
            path:"/",
            text:"BOOKS"
        },
        {
            id:2,
            path:"/category",
            text:"CATEGORIES"
        }
    ].map((link)=> <li className="nav-item">
            <Link to={link.path} className={"nav-link "+(location.pathname==link.path &&"current-page")}>{link.text}</Link>
        </li>)
  return (
     <header>
         <nav>
             <h1>Bookstore CMS</h1>
             <ul className="nav-lists">
                 { links }
             </ul>
             <div className="user">
                    <i class="fas fa-user"></i>
             </div>
         </nav>
     </header>
  );
}

export default Navbar;
