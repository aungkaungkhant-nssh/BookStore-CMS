import React, { useState } from 'react';
import Modal from 'react-modal';
import './EditBook.css';
import options from './options';
Modal.setAppElement("#root")
const customStyles ={
    content:{
        width:"80%",
        height:"80%",
        margin:"0px auto",
        maxWidth:"900px",
        maxHeight:"500px",
        position:"relative"
    }
}
const EditBook=({isOpen,closeModal,editBookData})=>{
    const [editNewBook,setEditNewBook] = useState({title:editBookData.title,category:editBookData.category});

    const handleChange = e =>{
        setEditNewBook({
            ...editNewBook,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = e =>{
        e.preventDefault();
        closeModal()
    }
  
    return (
        <Modal 
            isOpen={isOpen}
            style={customStyles}
            onRequestClose={closeModal}
        >
            <div className="edit_book_container">
                    <div className="icon">
                         <i class="fa-solid fa-xmark gray" onClick={closeModal}></i>
                    </div>
                    <h2 className="edit_book_title gray">edit new book</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Book Title" 
                        name="title" 
                        value={editNewBook.title} 
                        onChange={handleChange}
                        />
                        <select name="category" defaultValue={editNewBook.category} onChange={handleChange}>
                            <option value="DEFAULT"  disabled>Select Category</option>
                           
                            {
                            options.map((op,i)=>(
                                <option value={op.value} key={i} >{op.text}</option>
                            ))
                            }
                        </select>
                        <button type="sumbit" className="btn-submit">Update book</button>
                    </form>
                
            </div>
            
        </Modal>
    )
}

export default EditBook;