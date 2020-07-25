import React from 'react';
import {Link} from 'react-router-dom';
class NavBar extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <h1>A Blog of All Things Computer Science</h1>
                </header>
                
                <nav>
                    <ul className="nav-container">
                        <li className="nav-element" >
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-element">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-element">
                            <Link to="/articlelist" className="nav-link">Articles</Link>
                        </li>
                        <li className="nav-element">
                            <Link to="/login" className="nav-link">{this.props.textToDisplay}</Link>
                        </li>
                    </ul>
                </nav> 
           </div>
        )
    }
}

export default NavBar;
