import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import '../Effect.css'

const Signup = () => {

    const {register, handleSubmit} = useForm();

    const signUp = data => {

        const userInfo = {
            data
        }
        console.log(userInfo.data);
    }

    return (
        <div>
            {/* form body */}
            <div className='w-80 h-auto lg:w-[400px] rounded-xl shadow-effect mx-auto mt-20 lg:mt-40 bg-gray-200 px-10 py-10'>
                <h2 className="text-3xl font-bold -mt-5 mb-5">Sign Up</h2>
                <form onSubmit={handleSubmit(signUp)}>
                    {/* Form body, user name */}
                    <div className=''>
                        <label className='block text-start mb-2'>
                            <span className='text-xl font-semibold'>User Name</span>
                        </label>
                        <input className='w-full h-[50px] px-3 py-5 outline-none rounded-lg text-xl' type="text" 
                        {...register("name", { required: true })}
                         placeholder="Your Name" required />

                    </div>


                    {/* Form body, email */}
                    <div className='mt-7'>
                        <label className='block text-start mb-2'>
                            <span className='text-xl font-semibold'>Email</span>
                        </label>
                        <input className='w-full h-[50px] px-3 py-5 outline-none rounded-lg text-xl' type="email" {...register("email", { required: true })}
                         placeholder="Your Email" required />

                    </div>


                    {/* Form body, password */}
                    <div className='mt-7'>
                        <label className='block text-start mb-2'>
                            <span className='text-xl font-semibold'>Password</span>
                        </label>
                        <input className='w-full h-[50px] px-3 py-5 outline-none rounded-lg text-xl' type="password" {...register("password", { required: true })}
                         placeholder="Your Password" required />

                    </div>

                    <div className='mt-7'>
                        <input className='w-full h-[50px] mt-5 py-auto outline-none rounded-lg bg-blue-400 text-2xl font-semibold text-white hover:text-black hover:bg-gray-100 transition duration-200 cursor-pointer' type="submit" />
                    </div>
                </form>
                <div className='relative mt-5'>
                    <div className='h-[2px] w-full rounded-lg mt-5 bg-gray-400'>
                    </div>
                    <p className='text-xl font-bold mt-2 absolute left-0 right-0 -bottom-3 bg-gray-200 w-10 mx-auto'>Or</p>
                </div>
                <div>
                    <p className="text-[16px] mt-5">Already have an account? Please <span>
                        <Link className='text-blue-500 font-bold' to="/login" >Login</Link>
                    </span></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;