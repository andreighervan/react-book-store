import React from 'react';
import Book from "./Book";

class BookList extends React.Component{
    render(){
        return(
            <div>
                <Book/>
                <Book/>
                <Book/>
            </div>
        )
    }
}

export default BookList;