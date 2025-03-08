import React from 'react'
import styles from '../auth_screens/styles/auth.module.css'


export default function ResetPass() {
  return (
    <div className="flex justify-center items-center min-h-screen p-4 space-y-10">
    <div className={`${styles["container-border"]} w-full max-w-lg shadow-lg rounded-lg p-8 md:p-10 lg:p-12`} >
    <div className="flex flex-col items-center">
            <span className="h-12 w-12 mx-4">
                <img src="/favicon.ico" alt="COPSYS ICON" className='box-border' />
                </span>
            <h1 className="mt-6 text-2xl font-bold text-gray-900 px-4">Create New Password</h1>
            <span className=" text-gray-400 text-sm px-4">Password should be different from previous password</span>
        </div>

                <form action="#" method="post" className="mt-6 space-y-4">
                   

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block font-medium text-lg text-gray-900 m-3">
                            New Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter Password"
                            className="w-full rounded-md py-3 px-5 border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label htmlFor="password" className="block font-medium text-lg text-gray-900 m-3">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirm_password"
                            name="password"
                            placeholder="Re-Enter Password"
                            className="w-full rounded-md py-3 px-5 border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="mt-5 w-full bg-[02012B]/opacity-0.5 text-white font-semibold py-3 rounded-md transition hover:bg-[02012B] focus:ring-2 focus:ring-indigo-600"
                    >
                        Sign in
                    </button>

                  </form>
            </div>
        </div>
  )
}
