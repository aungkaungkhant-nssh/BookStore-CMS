import React from 'react';
import './Book.css'
import {removeBookAction} from '../../redux/book/bookAction'
import { connect } from 'react-redux';
function Book({title,category,item_id,removeBooks,editBook}) {
  
  return (
    <div className="book">
        <div className="book_details">
            <p className="gray category">{category.toUpperCase()}</p>
            <h2>{title}</h2>
            <p className="primary author">Author</p>
            <div className="btn-group">
                <button className="comment primary">Comment</button> 
                <button className="remove primary" onClick={()=>removeBooks(item_id)}>Remove</button>
                <button className="edit primary" onClick={()=>editBook(item_id)}>Edit</button>
            </div>
        </div>
        <div className="book_chapter">
            <p className="book_current">Current Chapter</p>
            <p className="book_chapter_no">Chapter 1</p>
            <button className="progress">Update Progress</button>
        </div>
    </div>
  );
}

export default Book
