import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends React.Component {
    onSearchSubmit = (term)=> {
        //console.log(term);
        axios.get('https://api.unsplash.com/search/photos', {
            params : {
                query : term
            },
            headers : {
                Authorization: 'Client-ID 5cf6d9b48b7234d9eebc4a72f3943a36f4250abefe5e7f8d1baca4f4b565d513'
            }
        });
    }
    render (){
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App