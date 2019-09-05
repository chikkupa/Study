import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {
    state = {
        lat: null,
        error: ''
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (error) => this.setState({error: error.message})
        );
    }

    renderContent(){
        if(this.state.error && !this.state.lat){
            return <div>Error: {this.state.error}</div>
        }

        if(!this.state.error && this.state.lat){
            return <SeasonDisplay latitude={this.state.lat} />
        }
        
        return <Spinner message="Please aceept the location access request!" />
    }

    render(){
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}
ReactDOM.render(
    <App />,
    document.querySelector("#root")
);