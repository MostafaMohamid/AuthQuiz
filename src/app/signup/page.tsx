"use client"
import React, { FormEvent } from 'react'
import { useRouter } from "next/navigation";
import img from "../../../images/login.jpeg"
import Apple from "../../../images/Apple logo.png"
import Google from "../../../images/Google.png"
import Facebook from "../../../images/facebook.png"
import Twitter from "../../../images/twitter.png"
import Image from 'next/image'
import { Poppins, Inter } from 'next/font/google';
import Link from 'next/link';
import SideBar from "../_componants/sideBar/page"
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { ToastContainer, toast } from 'react-toastify';
const _poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['normal', 'italic'],
});
const _Inter = Inter({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['normal', 'italic'],
});
export default function page() {
    const router = useRouter();
    interface FormValues {
        username: string;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        rePassword: string;
        phone: string;
    }
    const [formData, setFormData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        rePassword: '',
        phone: '',
    });
    async function registerUser(userData: FormValues) {
        try {
            const response = await fetch('https://exam.elevateegy.com/api/v1/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                console.log('Registration successful:', response.message);


                throw new Error('Failed to register user');
            }

            const data = await response.json();
            alert('Registration successful:', data);
            router.push("/login")
            return data;
        } catch (error) {
            console.error('Error during registration:', error.message);
            return { error: error.message };
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const userData: FormValues = {
            username: event.target.username.value,
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            email: event.target.email.value,
            password: event.target.password.value,
            rePassword: event.target.rePassword.value,
            phone: event.target.phone.value,
        }
        const result = await registerUser(userData);
        toast.error(result.error);
        if (result && result.error) {

           alert(result.error);
        } else if (result) {

            toast.success("Password reset successfully ");
            setFormData({
                username: '',
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                rePassword: '',
                phone: '',
            });
        } else {
            toast.error("An unexpected error occurred");
        }
    };
    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const [isVisiblePassword, setIsVisiblePassword] = useState(false);
    const [isVisibleConfirm, setIsisVisibleConfirm] = useState(false);

    const toggleVisibility = () => setIsVisiblePassword(prevState => !prevState);
    const toggleVisibilityconfirm = () => setIsisVisibleConfirm(prevState => !prevState);

    return (
        <div>
            {/* Adjust as needed */}
            <div className="grid grid-cols-12 gap-4 h-screen	">
                <SideBar />


                <div className="col-span-6  p-[80px]">
                    <div className='text-end '>
                        <div className='text-[20px] font-[400] pe-[21px] flex justify-end gap-[49px] items-center cursor-pointer' style={{ fontFamily: _Inter.style.fontFamily }}>
                            <span >English</span>
                            <Link href="login">
                                <span className='main-color font-[700]'>Sign in</span>
                            </Link>
                            <button className='border-[1px] rounded-[15px]  px-[19px] pt-[px] py-[3px] pr-[21px] gap-[10px]  main-color'> Register</button>



                        </div>

                    </div>
                    <div className='mt-[80px] w-[410px]   mx-auto '>
                        <h2 className="font-inter text-[24.78px] font-bold leading-[29.99px] text-left  mb-[32px]">
                            Sign Up </h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder=" User Name"
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mb-[32px]	"
                                value={formData.username}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder=" FirstName"
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mb-[32px]	"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder=" LastName"
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mb-[32px]	"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="email"
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mb-[32px]	"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="phone"
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mb-[32px]	"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            <div className="relative mb-[32px]">
                                <input
                                    type={isVisiblePassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    placeholder="password"
                                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full relative"
                                    value={formData.password}
                                    onChange={handleChange}
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
                            <div className="relative">
                                <input
                                    type={isVisibleConfirm ? "text" : "password"}
                                    id="rePassword"
                                    name="rePassword"
                                    placeholder="  rePassword"
                                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full relative"
                                    value={formData.rePassword}
                                    onChange={handleChange}
                                />
                                <button
                                    className="absolute  end-0  top-[50%] translate-y-[-50%] flex items-center z-20 px-2.5 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus-visible:text-indigo-500 hover:text-indigo-500 transition-colors"
                                    type="button"
                                    onClick={toggleVisibilityconfirm}
                                    aria-label={isVisibleConfirm ? "Hide password" : "Show password"}
                                    aria-pressed={isVisibleConfirm}
                                    aria-controls="confirmpassword"
                                >
                                    {isVisibleConfirm ? (
                                        <EyeOff size={20} aria-hidden="true" />
                                    ) : (
                                        <Eye size={20} aria-hidden="true" />
                                    )}
                                </button>
                            </div>
                            <p className='text-center mt-[8px]  ' style={{ fontFamily: _poppins.style.fontFamily }}> Already have an account?   <Link className=" main-color" href="/login"> Login </Link> </p>

                            <button className='bg-main w-full p-[8px] rounded-[20px] m-[20px] shadow-lg text-white ' type="submit" > Sign in</button>
                        </form>
                        <div className=' flex justify-between items-center'> <div className='login-line'></div> <p className='font-[400]' style={{
                            fontFamily: _Inter.style.fontFamily, color: 'rgba(108, 115, 127, 1)'
                        }}>Or Continue with</p> <div className='login-line'></div></div>

                        <div className='flex justify-center gap-[12px] '>
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


        </div >
    )
}

