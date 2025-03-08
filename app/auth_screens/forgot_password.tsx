import React from 'react'
import styles from '../auth_screens/styles/auth.module.css'



export default function PasswordReset() {


    return (
        <div className="flex justify-center items-center min-h-screen p-4 space-y-10">
            <div className={`${styles["container-border"]} w-full max-w-lg shadow-lg rounded-lg p-8 md:p-10 lg:p-12`} >
                <div className="flex flex-col ">
                    <span className="h-12 w-12 mx-4">
                        <img src="/favicon.ico" alt="COPSYS ICON" className='box-border' />
                        </span>
                    <h1 className="mt-6 text-2xl font-bold text-gray-900 px-4">Forgot Password?</h1>
                    <span className=" text-gray-400 text-sm px-4">Enter your email to reset your password</span>
                </div>

                <form action="#" method="post" className="mt-6 space-y-4">
                   

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block font-medium text-lg text-gray-900 m-3">
                           Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your Email"
                            className="w-full rounded-md py-3 px-5 border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                            autoComplete="email"
                            required
                        />
                    </div>

                    
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn-primary mt-5 w-full font-semibold py-3 rounded-md transition focus:ring-2 focus:ring-indigo-600"
                    >
                        Reset Password
                    </button>

                  
                </form>
              
            </div>
        </div>
    );
}
