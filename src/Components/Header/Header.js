import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-center mt-5'>
            <Link className='mx-2 font-semibold text-xl lg:text-2xl lg:mx-5 hover:text-blue-500 transition duration-200' to="/" >Home</Link>
            <Link className='mx-2 font-semibold text-xl lg:text-2xl lg:mx-5 hover:text-blue-500 transition duration-200' to="/login" >Login</Link>
            <Link className='mx-2 font-semibold text-xl lg:text-2xl lg:mx-5 hover:text-blue-500 transition duration-200' to="/signup" >SignUp</Link>
        </div>
    );
};

export default Header;