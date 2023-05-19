import {postRequest, postRequest_v2} from "../utils/ajax-tc";


export function getBooksByPage(num,callback) {
    const url=`http://localhost:8080/getBooksByPage?num=${Number(num)}`;
    postRequest(url,{},callback);
  }
  
  export function getBookById(bookId, callback) {
    const url=`http://localhost:8080/getBookById?id=${Number(bookId)}`;
    postRequest(url,{},callback);
  }
  
  export function getBookByName(name,callback) {
    const url=`http://localhost:8080/getBookByName?name=${name}`;
    postRequest(url,{},callback);
  }
  
  export function deleteBookById(id,callback) {
    const url=`http://localhost:8080/deleteBookById?id=${id}`;
    postRequest(url,{},callback);
  }
  
  // export function addBook(data,callback) {
  //   const url = `http://localhost:8080/addBook`;
  //   postRequest(url, data, callback);
  // }
  
  export function updateBook(data,callback) {
    const url=`http://localhost:8080/updateBook`;
    postRequest(url,data,callback);
  }
  
  
  export function getBooks2(callback) {
    const url=`http://localhost:8080/getBooks`;
    postRequest(url,{},callback);
  }

export const getBooks = (data, callback) => {
    const url = `http://localhost:8080/getBooks`;
    postRequest(url, data, callback);
};







// export const getBook = (id, callback) => {
//     const data = {id: id};
//     const url = `http://localhost:8080/getBook`;
//     postRequest_v2(url, data, callback);

// };


// export const addBook = (data,callback) => {
//     const url = `http://localhost:8080/addBook`;
//     postRequest(url, data, callback);
// };

// export const editBook = (data,callback) =>
// {
//     const url = `http://localhost:8080/editBook`;
//     postRequest(url, data, callback);
// };

// import { axios } from "../utils/axios";

// export const getBooks = (callback) => {
//     axios({
//         method: 'GET',
//         url: 'http://localhost:8080/getBooks',
//         params: {

//         }
//     }).then(response => {
//         callback(response.data);
//     }).catch(error => {
//         console.log(error);
//     })
// }

// export const getBook = (callback) => {
//     axios({
//         method: 'GET',
//         url: 'http://localhost:8080/getBook',
//         params: {
//             // book_id:book_id
//         }
//     }).then(response => {
//         callback(response.data);
//     }).catch(error => {
//         console.log(error);
//     })
// }

export const getBook = (bookId, callback) => {
  const data = {bookId: bookId};
  const url = `http://localhost:8080/getBook`;
  postRequest_v2(url, data, callback);
};


export const deleteBook = (bookId, callback) => {
  const data = {bookId: bookId};
  const url = `http://localhost:8080/deleteBook`;
  postRequest_v2(url, data, callback);
};


export const editBook = (data,callback)=>{
  const url = `http://localhost:8080/updateBook`;
  postRequest(url, data, callback);
};

export const addBook = (data,callback) => {
  const url = `http://localhost:8080/addBook`;
  postRequest(url, data, callback);
}

// export function addBook(data,callback) {
//   const url = `http://localhost:8080/addBook`;
//   postRequest(url, data, callback);
// }