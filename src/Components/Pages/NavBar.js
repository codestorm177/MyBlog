import React from 'react';
import {Link} from 'react-router-dom';
class NavBar extends React.Component {
    render() {
        return (
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
               </ul>
           </nav> 
        )
    }
}

export default NavBar;
