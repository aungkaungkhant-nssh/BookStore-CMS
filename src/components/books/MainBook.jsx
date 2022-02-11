import React,{useState,useEffect} from 'react';
import BookList from './BookList'
import AddBook from './AddBook'
import './MainBook.css'
import EditBook from './EditBook';
import { connect } from 'react-redux';
import {addBookAction, addInitialBook, removeBookAction} from '../../redux/book/bookAction'
function MainBook({books,getBook,removeBooks}) {
  const [isOpen,setIsOpen] = useState(false);

  const [editBookData,setEditBookData] = useState(null);
    useEffect(() => {
      getBook()
    }, []);
  
  const editBook =(id)=>{
     if(id){
        setIsOpen(!isOpen);
        setEditBookData(books.find((b) => b.item_id === id))
        
     }
  }
  const closeModal = ()=>{
    setIsOpen(false)
    setEditBookData(null)
  }
  
  return (
    <div className="mainbook_container">
        <BookList editBook={editBook} books={books} removeBooks={removeBooks}/>
        <AddBook />
        {
          editBookData && <EditBook isOpen={isOpen} closeModal={closeModal} editBookData={editBookData}/> 
        }
        
    </div>);
}
const mapStateToProps=state=>{
  return {
    books:state.books.books
  }
}
const mapStateToDispatch=(dispatch)=>{
   return {
      getBook:()=>dispatch(addInitialBook()),
      removeBooks:(id)=>dispatch(removeBookAction(id)),
   }
}
export default connect(mapStateToProps,mapStateToDispatch)(MainBook)
