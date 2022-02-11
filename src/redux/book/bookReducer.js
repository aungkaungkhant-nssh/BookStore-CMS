import { ADD_BOOK, INIT_BOOK, REMOVE_BOOK,UPDATE_BOOK } from "./bookType"

const initialState={
    books:[]
}

const bookReducer=(state=initialState,action)=>{
    switch(action.type){
        case INIT_BOOK:
            return {books:[...action.payload]}
        case REMOVE_BOOK:
            let filterBooks=state.books.filter((book)=>(
                book.item_id !==action.payload
            ))
            return {books:[...filterBooks]}
        case ADD_BOOK :
            return {books:[...state.books,action.payload]}
      
        default:return state
    }
}

export default bookReducer