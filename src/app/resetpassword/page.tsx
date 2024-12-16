"use client"

import React, { FormEvent, useState } from 'react'
import { useSearchParams } from "next/navigation";
import SideBar from "../_componants/sideBar/page"
import Link from 'next/link';
import Apple from "../../../images/Apple logo.png"
import Google from "../../../images/Google.png"
import Facebook from "../../../images/facebook.png"
import Twitter from "../../../images/twitter.png"
import Image from 'next/image'
import { Eye, EyeOff } from "lucide-react";
import { Inter } from 'next/font/google';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import { log } from 'console';

const _Inter = Inter({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['normal', 'italic'],
});
export default function page() {
    const router = useRouter();
    const [newPassword, setNewPassword] = useState("");
    const searchParams = useSearchParams();
    const email = searchParams.get("email");
    const [isVisiblePassword, setIsVisiblePassword] = useState(false);


    const toggleVisibility = () => setIsVisiblePassword(prevState => !prevState);
    const handleResetSubmit = async (e: FormEvent) => {
        e.preventDefault();
        console.log(email, "email here")
        try {
            const response = await fetch("https://exam.elevateegy.com/api/v1/auth/resetPassword", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email:`${email}` , newPassword}),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success("Password reset successfully ");
                router.push("/login")
            } else {
                toast.error(`Error: ${result.message}`);
            }
        } catch (error) {
            console.error("API Error:", error);
            alert("Something went wrong. Please try again.");
        }

    }
    if (!email) {
        return <div>No email found in query params.</div>;
    }

    return (

        <div>
            <ToastContainer position="top-center" autoClose={5000} /> {/* Adjust as needed */}

            <div className="grid grid-cols-12 gap-4 h-screen">
                <SideBar />

                <div className="col-span-6  p-[80px]">
                    <div className='text-end '>
                        <div className='text-[20px] font-[400] pe-[21px] flex justify-end gap-[49px] items-center cursor-pointer' style={{ fontFamily: _Inter.style.fontFamily }}>
                            <span >English</span>
                            <span className='main-color font-[700]'>Sign in</span>
                            <button className='border-[1px] rounded-[15px]  px-[19px] pt-[px] py-[3px] pr-[21px] gap-[10px]  main-color shadow-sm'> Register</button>



                        </div>
                        <div className='mt-[198px] w-[410px]   mx-auto  '>
                            <h2 className="font-inter text-[24.78px] font-bold leading-[29.99px] text-left  mb-[32px]">
                                Reset Password </h2>

                            <form className='flex flex-col justify-center items-center' onSubmit={handleResetSubmit}>


                                <div className="relative mb-[32px] w-full">
                                    <input
                                        type={isVisiblePassword ? "text" : "password"}
                                        id="Password"
                                        name="CreatePassword"
                                        placeholder="  CreatePassword"
                                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full relative"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                    <button
                                        className="absolute  end-0  top-[50%] translate-y-[-50%] flex items-center z-20 px-2.5 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus-visiblePassword:text-indigo-500 hover:text-indigo-500 transition-colors"
                                        type="button"
                                        onClick={toggleVisibility}
                                        aria-label={isVisiblePassword ? "Hide password" : "Show password"}
                                        aria-pressed={isVisiblePassword}
                                        aria-controls="password"
                                    >
                                        {isVisiblePassword ? (
                                            <EyeOff size={20} aria-hidden="true" />
                                        ) : (
                                            <Eye size={20} aria-hidden="true" />
                                        )}
                                    </button>
                                </div>



                                <button className='bg-main w-full px-[8px] rounded-[20px] m-[20px] shadow-lg text-white  py-[10px]' type="submit" > Sign in</button>

                            </form>





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
    );
}
