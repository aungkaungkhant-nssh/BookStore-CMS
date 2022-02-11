import axios from 'axios'

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/gKbdBULzeQgMvwW4IEc0/books';

const refactorDataFromApi=(books)=>{
    const initialBooks =[];
    Object.entries(books).map((d)=>{
        initialBooks.push({
          title:d[1][0].title,
          category:d[1][0].category,
          item_id:d[0]
        })
    })
    return initialBooks;
}

export const getInitialBooks=async()=>{
    const response = await axios.get(baseURL);
    const {data}=response;
    return refactorDataFromApi(data);
}

export const removeBooksServer=async(id)=>{
    const deleteURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/gKbdBULzeQgMvwW4IEc0/books/${id}`;
    const response = await axios.delete(deleteURL);
    return response.data;
}

export const addBooksServer = async(newBook)=>{
   const response = await axios.post(baseURL,newBook);
   return response.data;
}

export const updateBooksServer = async(updateBook)=>{
    const response = await axios.put(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/gKbdBULzeQgMvwW4IEc0/books/${updateBook.item_id}`,{title:updateBook.title,category:updateBook.category});
    return response.data
}