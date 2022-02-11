import React, { useState } from 'react';
import './AddBook.css'
import options from './options';
import { useDispatch, useSelector } from 'react-redux'
import { addBookAction } from '../../redux/book/bookAction';
function AddBook() {
  const dispatch = useDispatch();
  let [newBooks,setNewBooks] =useState({title:"",category:"technology"})

  const handleChange = e =>{

       setNewBooks({
         ...newBooks,
         [e.target.name]:e.target.value
       })
  }
  const handleSubmit = e =>{
    e.preventDefault();
    e.target.title.value="";
    e.target.category.value="technology";   
    dispatch(addBookAction(newBooks));
    setNewBooks({title:"",category:"technology"})
  }
  return (
    <div className="addbook_container">
       <h2 className="addbook_title gray">add new book</h2>
       <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Book Title" 
          name="title"
          value={newBooks.title} onChange={handleChange}/>
          <select name="category" id="" onChange={handleChange}>
            <option value="category:"  disabled>Select Category</option>
            {
              options.map((op,i)=>(
                <option value={op.value} key={i}>{op.text}</option>
              ))
            }
          </select>
          <button type="sumbit" className="btn-submit" >Add book</button>
       </form>
    </div>
  )
  ;
}

export default AddBook;
