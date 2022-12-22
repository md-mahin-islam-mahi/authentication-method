import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import '../Effect.css'

const Update = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='py-10'>
            <h3 className='text-3xl mt-5 font-semibold'>Update Username and Password.</h3>
            <div className='w-80 h-auto lg:w-[400px] rounded-xl shadow-effect mx-auto mt-10 lg:mt-40 bg-gray-200 px-10 py-10'>
                <h2 className="text-3xl font-bold -mt-5 mb-5">Update</h2>
                <form action="">
                    {/* Form body, user name */}
                    <div className=''>
                        <label className='block text-start mb-2'>
                            <span className='text-xl font-semibold'>User Name</span>
                        </label>
                        <input className='w-full h-[50px] px-3 py-5 outline-none rounded-lg text-xl' type="text" name="name" placeholder="Your Name" defaultValue={user?.displayName} required />

                    </div>


                    {/* Form body, email */}
                    <div className='mt-7'>
                        <label className='block text-start mb-2'>
                            <span className='text-xl font-semibold'>Email</span>
                        </label>
                        <input className='w-full h-[50px] px-3 py-5 outline-none rounded-lg text-xl' type="email" name="email" placeholder="Your Email" defaultValue={user.email} required />

                    </div>


                    {/* Form body, old password */}
                    <div className='mt-7'>
                        <label className='block text-start mb-2'>
                            <span className='text-xl font-semibold'>Old Password</span>
                        </label>
                        <input className='w-full h-[50px] px-3 py-5 outline-none rounded-lg text-xl' type="password" name="oldPassword" placeholder="Old Password" required />

                    </div>

                    {/* Form body, new password */}
                    <div className='mt-7'>
                        <label className='block text-start mb-2'>
                            <span className='text-xl font-semibold'>New Password</span>
                        </label>
                        <input className='w-full h-[50px] px-3 py-5 outline-none rounded-lg text-xl' type="password" name="newPassword" placeholder="New Password" required />

                    </div>

                    <div className='mt-7'>
                        <input className='w-full h-[50px] mt-5 py-auto outline-none rounded-lg bg-blue-400 text-2xl font-semibold text-white hover:text-black hover:bg-gray-100 transition duration-200 cursor-pointer' type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;