import './Error404.scss';

import { Link } from 'react-router-dom';

const Error404 = () => {
    document.title = '404 Not Found | BrainFlix';
    return (
        <div>
            <main className="master">
                <div className="master__container">
                    <div className="error">
                        <span className="error__shape">
                            <span className="error__text">404</span>
                        </span>
                        <p className="error__body">This page doesn’t exist. Try the following links.</p>
                        <Link to="/" className='error__link'>Home</Link>
                        <Link to="/upload" className='error__link'>Upload</Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Error404;