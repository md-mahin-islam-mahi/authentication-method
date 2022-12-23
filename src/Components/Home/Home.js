import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const Home = () => {
    const { user } = useContext(AuthContext);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        fetch(`https://signup-and-login-server.vercel.app/user/${user?.email}`)
            .then(res => res.json())
            .then(data => setCurrentUser(data))
    }, [user?.email])

    return (
        <div className='mt-40'>
            <h2 className=' text-5xl font-bold'>You're Welcome {currentUser?.displayName}...</h2>
            {
                user  &&
                    <div className='w-96 lg:w-[450px] h-auto bg-gray-100 font-semibold text-gray-500 rounded-lg shadow-effect mx-auto text-start my-10 py-5 px-3'>
                        <h3 className="text-2xl lg:text-3xl">Your Name: {currentUser?.displayName}</h3>
                        <h3 className="text-2xl lg:text-3xl">Your Email: {currentUser?.email}</h3>
                        <h3 className="text-2xl lg:text-3xl">Your Phone: {currentUser?.phoneNumber}</h3>
                        <h3 className="text-2xl lg:text-3xl">Your Address: {currentUser?.address}</h3>
                    </div>
            }
        </div>
    );
};

export default Home;