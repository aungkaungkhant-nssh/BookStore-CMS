import {ADD_BOOK, INIT_BOOK, REMOVE_BOOK,UPDATE_BOOK} from './bookType'
import {addBooksServer, getInitialBooks,removeBooksServer, updateBooksServer} from '../../services/bookstore'
import { v4 as uuidv4 } from 'uuid';
export const addInitialSuccess =(books)=>{
    return {
        type:INIT_BOOK,
        payload:books
    }
}
export const addInitialBook=()=>{
    return (dispatch) =>{
        getInitialBooks()
        .then((res)=>{
             dispatch(addInitialSuccess(res))      
        })
        .catch((err)=>console.log(err))
    }
}


export const removeBookAction=(id)=>{
    return (dispatch)=>{
        removeBooksServer(id)
        .then((res)=>{
            dispatch({type:REMOVE_BOOK,payload:id})
        })
        .catch((err)=>console.log(err))
    }
}

export const addBookAction  = newBook =>{
    newBook ={
        ...newBook,
        item_id: uuidv4(),
    }
    return (dispatch) => {
        addBooksServer(newBook)
        .then((res) => {
            dispatch({type:ADD_BOOK,payload:newBook})
        })
        .catch((err) => console.log(err))
    }
}

export const updateBookAction = updateBook =>{
    return (dispatch)=>{
        updateBooksServer(updateBook)
        .then((res) =>{
            dispatch({type:UPDATE_BOOK,payload:updateBook})
        })
    }
}