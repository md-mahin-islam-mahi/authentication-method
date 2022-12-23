import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import '../Effect.css'

const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const signIn = data => {
        userLogin(data.email, data.password)
            .then(result => {
                const user = result.user
                if (user) {
                    toast.success("Login successful!");
                    navigate('/')
                }
            })
            .catch(err => setError(err));
    }

    return (
        <div>
            {/* form body */}
            <div className='w-80 h-auto lg:w-[400px] rounded-xl shadow-effect mx-auto mt-40 bg-gray-200 px-10 py-10'>
                <h2 className="text-3xl font-bold -mt-5 mb-5">Login</h2>
                <form onSubmit={handleSubmit(signIn)}>
                    {/* Form body, email */}
                    <div className=''>
                        <label className='block text-start mb-2'>
                            <span className='text-xl font-semibold'>Email</span>
                        </label>
                        <input className='w-full h-[50px] px-3 py-5 outline-none rounded-lg text-xl' type="email"
                            {...register("email", { required: "Email is required" })}
                            placeholder="Your Email" />
                        <p className='text-start text-red-500 '>{errors.email?.message}</p>

                    </div>

                    {/* Form body, password */}
                    <div className='mt-7'>
                        <label className='block text-start mb-2'>
                            <span className='text-xl font-semibold'>Password</span>
                        </label>
                        <input className='w-full h-[50px] px-3 py-5 outline-none rounded-lg text-xl' type="password"
                            {...register("password", { required: "Password is reqiured" })}
                            placeholder="Your Password" />
                        <p className='text-start text-red-500 '>{errors.password?.message}</p>

                    </div>

                    <div className='mt-7'>
                        <input className='w-full h-[50px] mt-5 py-auto outline-none rounded-lg bg-blue-400 text-2xl font-semibold text-white hover:text-black hover:bg-gray-100 transition duration-200 cursor-pointer' type="submit" />
                        <p className="text-red-500">{error}</p>
                    </div>
                    <div>
                        <Link to="/reset-password">
                            <h3 className='font-semibold cursor-pointer mt-3 flex justify-center w-40 mx-auto'>Forgot Password?</h3>
                        </Link>
                    </div>
                </form>
                <div className='relative'>
                    <div className='h-[2px] w-full rounded-lg mt-5 bg-gray-400'>
                    </div>
                    <p className='text-xl font-bold mt-2 absolute left-0 right-0 -bottom-3 bg-gray-200 w-10 mx-auto'>Or</p>
                </div>
                <div>
                    <p className="text-[16px] mt-5">Don't have an account? Please <span>
                        <Link className='text-blue-500 font-bold' to="/signup" >SignUp</Link>
                    </span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;