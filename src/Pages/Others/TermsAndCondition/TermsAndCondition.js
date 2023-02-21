import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h2>Welcome to Terms and Codition</h2>
            <p>Go back <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndCondition;