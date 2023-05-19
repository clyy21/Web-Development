import React from 'react'
import BookDetails from '../Components/BookDetails/BookDetails'
import Navbar from '../Components/NavBar'

class BookDetailsView extends React.Component{
  constructor(props) {
    super(props);
    let search=window.location.search;
    let params=new URLSearchParams(search);
    this.state={
      bookId: params.get('id'),
    }
    console.log("getid:",this.state.bookId);
  }

  onChange_input = () => {
    console.log('book detail view changed', this);
  };

  render(){
  return (
    <div>
      <Navbar/>
      <BookDetails bookId={this.state.bookId}/>
    </div>
  )
  }
}

export default BookDetailsView
