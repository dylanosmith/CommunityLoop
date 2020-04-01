import React from 'react';
import { Link } from '@reach/router';

const NavBar = props => {
    return (
        <span>
            <h3>Welcome </h3>
            <Link to='/UserProfile'>View Profile</Link>
            <p>Star rating </p>
            <button>Post Jobs</button>
            <button>Something Else</button>

        </span>
    )
}

export default NavBar;