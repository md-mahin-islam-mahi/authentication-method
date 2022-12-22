import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Header = () => {
    const { user, userLogOut } = useContext(AuthContext);

    const logout = () => {
        userLogOut()
        .then(() => {})
        .catch(() =>{});
        toast.success("Sign out successfully!");
    }
    return (
        <div className='flex justify-center mt-5'>
            <Link className='mx-2 font-semibold text-xl lg:text-2xl lg:mx-5 hover:text-blue-500 transition duration-200' to="/" >Home</Link>
            {
                user?.email ?
                    <p onClick={logout} className='mx-2 font-semibold text-xl lg:text-2xl lg:mx-5 hover:text-blue-500 transition duration-200 cursor-pointer'>Logout</p>
                    :
                    <div>
                        <Link className='mx-2 font-semibold text-xl lg:text-2xl lg:mx-5 hover:text-blue-500 transition duration-200' to="/login" >Login</Link>
                        <Link className='mx-2 font-semibold text-xl lg:text-2xl lg:mx-5 hover:text-blue-500 transition duration-200' to="/signup" >SignUp</Link>
                    </div>
            }

        </div>
    );
};

export default Header;