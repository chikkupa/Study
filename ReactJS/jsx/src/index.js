// Import React and ReactDom Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react coponent
const App = () => {
    const labelText = "Name: ";
    const buttonText = ['Click', ' Me'];
    const style = {backgroundColor: 'blue', color:'white'};

    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText}
            </label>
            <input id="name" type="text" />
            <button style={style}>{buttonText}</button>
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector("#root")
);
