'use client'
import React, { useState } from 'react'
import styles from '../auth_screens/styles/auth.module.css'

export default function LogIn() {
    const options: string[] = ['Select Organization', "React", "Vue", "Angular"];
    const [remember_me, setRemember] = useState(false);
    // /favicon.ico was used for icons

    const HandleRemember = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRemember(e.target.checked);
    };

    return (
        <div className="flex justify-center items-center min-h-screen p-4 space-y-10">
            <div className={`${styles["container-border"]} w-full max-w-lg shadow-lg rounded-lg p-8 md:p-10 lg:p-12`} >
                <div className="flex flex-col items-center">
                    <img src="/favicon.ico" alt="COPSYS ICON" className="h-12 w-12" />
                    <h1 className="mt-6 text-center text-2xl font-bold ">LOG INTO ACCOUNT</h1>
                </div>

                <form action="#" method="post" className="mt-6 space-y-4">
                    {/* Organization Dropdown */}
                    <div>
                        <label htmlFor="organization_dropdown" className="block font-medium text-lg  m-3">
                            Organization
                        </label>
                        <select
                            name="organization"
                            id="organization_dropdown"
                            className="w-full rounded-md py-3 px-5 border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                            required
                        >
                            {options.map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block font-medium text-lg  m-3">
                            Email or Username
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

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="block font-medium text-lg  m-3">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            className="w-full rounded-md py-3 px-5 border "
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="button btn-primary mt-5 w-full font-semibold py-3 rounded-md transition"
                    >
                        Sign in
                    </button>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex justify-between items-center mt-3 text-sm">
                        <label className="flex items-center space-x-2 whitespace-nowrap cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 accent-[#CB8542]" checked={remember_me} onChange={HandleRemember}/>
                        <span className="text-sm">Remember Me</span>
                        </label>
                        <a href="#">Forgot Password?</a>
                    </div>
                </form>
                {/* Divider */}
                <div className="flex items-center w-full">
                    <div className="flex-1 h-px bg-gray-500 items-center"></div>
                    <span className="px-4 text-gray-400 text-sm">Or register with</span>
                    <div className="flex-1 h-px bg-gray-500"></div>
                </div>
                
                {/* SignUp buttons */}
                <div className="mt-4 flex space-x-4">
                    {/* Google Button */}
                    <button className="flex justify-center gap-2 items-center px-6 py-3 m-2 outline shadow-sm border-gray-500 rounded-lg text-sm hover:bg-gray-200 transition">
                      <img src="/favicon.ico" alt="Google" className="w-4 h-4 mr-2" />
                      Google
                    </button>

                    {/* Apple Button */}
                    <button className="flex justify-center gap-2 items-center px-6 py-3 m-2 outline shadow-sm border-gray-500 rounded-lg text-sm hover:bg-gray-200 transition ">
                      <img src="/favicon.ico" alt="Apple" className="w-4 h-4 mr-2" />
                      Apple
                    </button>
                </div>
            </div>
        </div>
    );
}
