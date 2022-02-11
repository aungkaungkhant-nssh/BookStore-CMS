import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import Book from './Book';
import './BookList.css'
function BookList({books,removeBooks,editBook}) {
 
  return (
    <div className="booklist_container">
        <ul>
            {
              books.map((book)=>{
              return ( <li key={book.item_id}>
                    <Book title={book.title} category={book.category} item_id={book.item_id} removeBooks={removeBooks} editBook={editBook}/>
                </li>)
              })
            }
        </ul>
        
    </div>
  );
}

export default BookList;
