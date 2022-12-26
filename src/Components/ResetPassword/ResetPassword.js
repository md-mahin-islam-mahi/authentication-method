import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const ResetPassword = () => {
    const [error, setError] = useState('');
    const {resetPassword} = useContext(AuthContext);
    const navigate = useNavigate();

    const { register, formState: { errors }, handleSubmit } = useForm();

    const resetPass = data => {
        resetPassword(data.email)
        .then(() => {
            toast("Check your email");
            navigate("/login");
        })
        .catch(err => {
            const errorCode = err.code.split("auth/")[1];
            setError(errorCode);
        });
    }
    return (
        <div>
            {/* form body */}
            <div className='w-80 h-auto lg:w-[400px] rounded-xl shadow-effect mx-auto mt-40 bg-gray-200 px-10 py-10'>
                <h2 className="text-3xl font-bold -mt-5 mb-5">Reset Password</h2>
                <form onSubmit={handleSubmit(resetPass)}>
                    {/* Form body, email */}
                    <div className=''>
                        <label className='block text-start mb-2'>
                            <span className='text-xl font-semibold'>Email</span>
                        </label>
                        <input className='w-full h-[50px] px-3 py-5 outline-none rounded-lg text-xl' type="email"
                            {...register("email", { required: "Email is required" })}
                            placeholder="Your Email" />
                        <p className='text-red-500 font-semibold text-start text-xl'>{error}</p>

                    </div>

                    <div className='mt-7'>
                        <input className='w-full h-[50px] mt-5 py-auto outline-none rounded-lg bg-blue-400 text-2xl font-semibold text-white hover:text-black hover:bg-gray-100 transition duration-200 cursor-pointer' type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;