var Greeter = React.createClass({
    render: function(){
        return (
            <div>
                <h1>Test content</h1>
                <p>This is a paragraph</p>
            </div>
        );
    }
});

ReactDOM.render(
    <Greeter/>,
    document.getElementById("app")
);