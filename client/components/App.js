import React from 'react';
import BookList from './BookList';
import axios from 'axios';

class App extends React.Component{
    constructor() {
        super();
        this.state = {answer:42};
    }
    componentDidMount(){
        axios
            .get('http://localhost//api/books/')
            .then(resp=>{
                console.log(JSON.stringify(resp.data.title))
            })
    }
    render(){
        return(
            <div>
                <BookList/>
            </div>
        )
    }
}

export default App;