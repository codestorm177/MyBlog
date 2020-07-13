import React from 'react';

class CommentList extends React.Component {
    render() {
        return (
            <div>
                <h3>Comments:</h3>
                {this.props.comments.map((comment,key) => (
                    <div className="comment" key={key}>
                        <h4>{comment.username}</h4>
                        <p>{comment.text}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default CommentList;