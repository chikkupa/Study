import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4 PM"
                    avatar={faker.image.avatar()}
                    content="New blog post" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Sarath"
                    timeAgo="Today at 2 AM"
                    avatar={faker.image.avatar()}
                    content="This is a blog post" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="John"
                    timeAgo="Yesterday at 8:30 PM"
                    avatar={faker.image.avatar()}
                    content="This is my blog" />
            </ApprovalCard>
            
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector("#root"));