'use client'
import React, { useEffect, useState, useTransition } from 'react'
import styles from '../auth_screens/styles/auth.module.css'

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
  } from "@/components/ui/input-otp"
  

export default function EmailVerify() {
    const email="copsys@hotmail.com"
    const [otp,setOtp]=useState('');
    const [error,isError]=useState(false);
    const [success,isSuccess]=useState(false);
    const [ResetCountdown,setResetCountdown]=useState(0)
    const [isPending,startTransition]=useTransition()

    useEffect(()=>{
        let timer :NodeJS.Timeout;
        if (ResetCountdown > 0){
            timer=setTimeout(() => setResetCountdown(ResetCountdown-1), 1000);
        }
        return ()=> clearTimeout(timer)


    },[ResetCountdown])

    return (
        <div className="flex justify-center items-center min-h-screen p-4 space-y-10">
            <div className={`${styles["container-border"]} w-full max-w-lg shadow-lg rounded-lg p-8 md:p-10 lg:p-12`} >
                <div className="flex flex-col items-center">
                    <img src="/favicon.ico" alt="COPSYS ICON" className="h-12 w-12" />
                    <h1 className="mt-3 text-center text-2xl font-bold text-gray-900">Enter Verification Code from Email</h1>
                    <p className="px-4 text-gray-400 text-sm">We have sent a code to <a href="#">{email}</a></p>

                </div>

                <form action="#" method="post" className="mt-6 space-y-4">

                    {/* OTP SECTION */}
                    <div className='w-full'>
                    <InputOTP maxLength={4}>
                    {/* <InputOTPGroup> */}
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                    {/* </InputOTPGroup> */}
                    </InputOTP>
                    </div>
                   
                    <p className="px-4 text-gray-400 text-sm flex items-center">Resend code in {ResetCountdown}</p>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="mt-5 w-full bg-[02012B] text-white font-semibold py-3 rounded-md transition hover:bg-[02012B] focus:ring-2 focus:ring-indigo-600"
                    >
                        Continue
                    </button>
                </form>
             </div>
            
        </div>
    );
}
