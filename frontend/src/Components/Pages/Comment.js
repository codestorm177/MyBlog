import React from 'react';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            comment: ''
        };

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleUpdate(e) {
        const type = e.target.name;
        const value = e.target.value;
        this.setState({
            [type]: value
        });
    }

    handleClick() {
        const username = this.state.username;
        const comment = this.state.comment;
        this.setState({username: '', comment: ''});
        this.props.addComment({username, comment}, this.props.name);
    }

    render() {
        return (
            <div>
                <h3>Add A Comment:</h3>            
                <form>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" value={this.state.username} onChange={this.handleUpdate}></input>
                    <br />
                    <label htmlFor="comment">Comment:</label>
                    <textarea type="text" name="comment" id="comment" value={this.state.comment} onChange={this.handleUpdate}></textarea>
                    <br />                    
                </form>
                <button onClick={this.handleClick}>Submit</button>
            </div>            
        )
    }
}

export default Comment;