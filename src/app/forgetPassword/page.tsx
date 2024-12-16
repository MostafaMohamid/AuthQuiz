"use client";
import { FormEvent, useState } from 'react';
import React from 'react'
import SideBar from "../_componants/sideBar/page"
import { Poppins, Inter } from 'next/font/google';
import Link from 'next/link';
import Apple from "../../../images/Apple logo.png"
import Google from "../../../images/Google.png"
import Facebook from "../../../images/facebook.png"
import Twitter from "../../../images/twitter.png"
import Image from 'next/image'
import { log } from 'node:console';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from "next/navigation";

const _Inter = Inter({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['normal', 'italic'],
});
export default function page() {

    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
    const [first, setfirst] = useState(false);
    const [code, setCode] = useState("");
    const router = useRouter(); // Error: This is not inside a React component

    const handleEmailSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('https://exam.elevateegy.com/api/v1/auth/forgotPassword', {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setfirst(true)

                setStatus('Check your email for a password reset Code.');
            } else {
                const errorData = await response.json();
                setStatus(errorData.message || 'An error occurred.');
            }
        } catch (error) {
            setStatus('Failed to send the email. Please try again.');
        }
    };
    const handleCodeSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('https://exam.elevateegy.com/api/v1/auth/verifyResetCode', {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ resetCode: code }),
            });

            if (response.ok) {
                console.log("Code is Done Success ");
                router.push(`/resetpassword?email=${encodeURIComponent(email)}`);

            } else {
                const errorData = await response.json();
                setStatus(errorData.message || 'An error occurred.');
            }
        } catch (error) {
            setStatus('code');
        }
    };
    return (
        <div>
            <div className="grid grid-cols-12 gap-4 h-screen">
                <SideBar />

                <div className="col-span-12 lg:col-span-6  p-[80px]">
                    <div className='text-end '>
                        <div className='text-[20px] font-[400] pe-[21px] flex justify-end gap-[49px] items-center cursor-pointer' style={{ fontFamily: _Inter.style.fontFamily }}>
                            <span >English</span>
                            <Link href="/login">
                            <span className='main-color font-[700]'>Sign in</span>
                            </Link>
                            <Link href="/signup">
                                <button className='border-[1px] rounded-[15px]  px-[19px] pt-[px] py-[3px] pr-[21px] gap-[10px]  main-color shadow-sm'> Register</button>
                            </Link>



                        </div>
                        <div className='mt-[198px] w-[410px]   mx-auto '>
                            <h2 className="font-inter text-[24.78px] font-bold leading-[29.99px] text-left  mb-[32px]">
                                Recover Password ? </h2>

                            {first == false ? <form className='flex flex-col justify-center items-center' onSubmit={handleEmailSubmit}>
                                <input
                                    type="text"
                                    id="Email"
                                    name="Email"
                                    placeholder="Enter your Email"
                                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full 	"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />




                                <button className='bg-main w-full px-[8px] rounded-[20px] m-[20px] shadow-lg text-white  py-[10px]' type="submit" > Sign in</button>
                                <p className='text-end mt-[8px] main-color  self-end'> <Link className=" main-color" href="/forgetPassword"> Recover Password ? </Link></p>
                            </form> : <form onSubmit={handleCodeSubmit} className='flex flex-col justify-center items-center'>
                                <input
                                    type="text"
                                    id="code"
                                    name="code"
                                    placeholder="Enter the Code"
                                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full 	"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                />


                                {status && <p className="mt-4 text-green-500">{status}</p>}

                                <button className='bg-main w-full px-[8px] rounded-[20px] mt-[20px]  shadow-lg text-white  py-[10px]' type="submit" > Verify The code</button>

                                <p className="text-end  main-color  self-end m-[10px]" >
                                    Didn't receive the code ? <span className="main-color">Resend</span> </p>
                            </form>}





                            <div className=' flex justify-between items-center'> <div className='login-line'></div> <p className='font-[400]' style={{
                                fontFamily: _Inter.style.fontFamily, color: 'rgba(108, 115, 127, 1)'
                            }}>Or Continue with</p> <div className='login-line'></div></div>
                            <div className='flex justify-center gap-[12px] py-3 '>
                                <span className='rounded-[15.38px] border p-[15px]'>
                                    <Image src={Google} alt="Apple icon"
                                        width={19}
                                        height={25}


                                    />

                                </span>
                                <span className='rounded-[15.38px] border p-[15px]' >
                                    <Image src={Twitter} alt="Apple icon"
                                        width={19}
                                        height={25}


                                    />

                                </span>
                                <span className='rounded-[15.38px] border p-[15px]'>
                                    <Image src={Facebook} alt="Apple icon"
                                        width={19}
                                        height={25}


                                    />

                                </span>
                                <span className='rounded-[15.38px] border p-[15px]'>
                                    <Image src={Apple} alt="Apple icon"
                                        width={19}
                                        height={25}


                                    />

                                </span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
