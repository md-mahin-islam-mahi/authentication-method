import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='mt-60'>
            <h2 className=' text-5xl font-bold'>You're Welcome {user?.displayName}...</h2>
            <h3 className="text-2xl text-blue-500">Want to update Username and Password?</h3>
            <div className='mt-5'>
                <Link className='mx-2 font-semibold text-xl lg:text-2xl lg:mx-5 hover:text-blue-500 transition duration-200 py-2 px-5 rounded-lg bg-gray-200 hover:bg-gray-100/50' to="/update">Update</Link>
            </div>
        </div>
    );
};

export default Home;