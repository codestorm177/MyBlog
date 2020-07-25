import React from 'react';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        const comment = this.state.comment;
        this.setState({comment: ''});
        this.props.addComment({comment}, this.props.name);
    }

    render() {
        return (
            <div>
                <h3>Add A Comment:</h3>            
                <form>
                    <textarea type="text" name="comment" id="comment" value={this.state.comment} onChange={this.handleUpdate}></textarea>
                    <br />                    
                </form>
                <button className="submit-button" onClick={this.handleClick}>Submit</button>
            </div>            
        )
    }
}

export default Comment;