import React from 'react';

class NavBar extends React.Component {
    render() {
        return (
           <nav>
               <ul>
                   <li>
                       <Link to="/">Home</Link>
                   </li>
                   <li>
                       <Link to="/about">About</Link>
                   </li>
                   <li>
                       <Link to="/articlelist">Articles</Link>
                   </li>
               </ul>
           </nav> 
        )
    }
}