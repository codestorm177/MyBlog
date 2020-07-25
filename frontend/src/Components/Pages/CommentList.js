import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
    render() {
        return (
            <div>  
                {this.props.isLoggedIn ? <Comment addComment={this.props.addComment} name={this.props.name} /> : '' }            
                <div className="comment-list">
                    <h2>Comments</h2>
                    {this.props.comments.map((comment,key) => (
                        <div className="comment" key={key}>
                            <strong>{comment.username}</strong>
                            <p>{comment.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default CommentList;