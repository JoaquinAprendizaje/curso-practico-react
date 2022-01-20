import React from 'react';
import '../styles/NotFound.scss'
const NotFound = () => {
    return (
        <div>
            <h1 className="title-404">ERROR 404</h1>
            <p className="text-404">Oops! Page Not Found</p>
            <a className="button-404" href="#">Return to Main Page</a>
        </div>
    );
}

export default NotFound;