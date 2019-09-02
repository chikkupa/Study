import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" timeAgo="Today at 4 PM" avatar={faker.image.avatar()} content="New blog post" />
            <CommentDetail author="Sarath" timeAgo="Today at 2 AM" avatar={faker.image.avatar()} content="This is a blog post" />
            <CommentDetail author="John" timeAgo="Yesterday at 8:30 PM" avatar={faker.image.avatar()} content="This is my blog" />
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector("#root"));