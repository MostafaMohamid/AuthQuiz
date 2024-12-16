"use client"
import React, { FormEvent } from 'react'
import img from "../../../images/login.jpeg"
import Image from 'next/image'
import { Poppins, Inter } from 'next/font/google';
import "./login.css"
import Link from 'next/link';
import SideBar from "../_componants/sideBar/page"
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Apple from "../../../images/Apple logo.png"
import Google from "../../../images/Google.png"
import Facebook from "../../../images/facebook.png"
import Twitter from "../../../images/twitter.png"
import { log } from 'node:console';
import { signIn } from 'next-auth/react';


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

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(prevState => !prevState);
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        console.log("halo");

        signIn("credentials", {

            email: userName,
            password: password,


        })
    }

    return (

        <div>
            <div className="grid grid-cols-12 gap-4 h-screen	">
                <SideBar />
                {/* <div className="col-span-6  bg-login rounded-tr-[100px] rounded-br-[100px] shadow-lg shadow-black-500/50 ">
                    <div className='p-[80px] ' style={{ fontFamily: _poppins.style.fontFamily }}>
                        <h1 className='text-[50px] font-bold '>Welcome to <br /> <span className='main-color'> Elevate</span> </h1>

                        <p className='w-[482px] pb-[80px]' >Quidem autem voluptatibus qui quaerat aspernatur architecto natus</p>
                        <Image
                            src={img}
                            alt="Login Image"
                            width={408}
                            height={434.59}
                        />
                    </div>







                </div> */}

                <div className="col-span-12 lg:col-span-6  p-[80px]">
                    <div className='text-end '>
                        <div className='text-[20px] font-[400] pe-[21px] flex justify-end gap-[49px] items-center cursor-pointer' style={{ fontFamily: _Inter.style.fontFamily }}>
                            <span >English</span>
                            <span className='main-color font-[700]'>Sign in</span>
                            <Link href="/signup">
                                <button className='border-[1px] rounded-[15px]  px-[19px] pt-[px] py-[3px] pr-[21px] gap-[10px]  main-color shadow-sm'> Register</button>
                            </Link>


                        </div>

                    </div>
                    <div className='mt-[198px] w-[410px]   mx-auto '>
                        <h2 className="font-inter text-[24.78px] font-bold leading-[29.99px] text-left  mb-[32px]">
                            Sign in </h2>
                        <form onSubmit={handleSubmit}
                            autoComplete='off'>




                            <input
                                type="text"
                                id="Email"
                                name="Email"
                                placeholder="Enter your Email"
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mb-[32px]	"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                            <div className="relative">
                                <input
                                    type={isVisible ? "text" : "password"}
                                    id="Pasword"
                                    name="Pasword"
                                    placeholder="Enter your Pasword"
                                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full relative"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}

                                />
                                <button
                                    className="absolute  end-0  top-[50%] translate-y-[-50%] flex items-center z-20 px-2.5 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus-visible:text-indigo-500 hover:text-indigo-500 transition-colors"
                                    type="button"
                                    onClick={toggleVisibility}
                                    aria-label={isVisible ? "Hide password" : "Show password"}
                                    aria-pressed={isVisible}
                                    aria-controls="password"
                                >
                                    {isVisible ? (
                                        <EyeOff size={20} aria-hidden="true" />
                                    ) : (
                                        <Eye size={20} aria-hidden="true" />
                                    )}

                                </button>

                            </div>

                            <p className='text-end mt-[8px] main-color '> <Link className=" main-color" href="/forgetPassword"> Recover Password ? </Link></p>

                            <button className='bg-main w-full p-[8px] rounded-[20px] m-[20px] shadow-lg text-white ' type='submit' > Sign in</button>
                        </form>
                        <div className=' flex justify-between items-center'> <div className='login-line'></div> <p className='font-[400]' style={{
                            fontFamily: _Inter.style.fontFamily, color: 'rgba(108, 115, 127, 1)'
                        }}>Or Continue with</p> <div className='login-line'></div></div>
                        {/* <div className='flex justify-center '>
                            <svg width="128" height="127" viewBox="0 0 128 127" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer'>
                                <g filter="url(#filter0_d_1_2869)">
                                    <rect x="31.5" y="13" width="65" height="64" rx="15.375" fill="white" shape-rendering="crispEdges" />
                                    <rect x="32.0125" y="13.5125" width="63.975" height="62.975" rx="14.8625" stroke="#E0E0E9" stroke-width="1.025" stroke-linecap="round" shape-rendering="crispEdges" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M75.3161 45.2679C75.3161 44.432 75.241 43.6283 75.1017 42.8568H64.0001V47.4164H70.3439C70.0706 48.8899 69.2401 50.1383 67.9917 50.9741V53.9317H71.8012C74.0302 51.8796 75.3161 48.8577 75.3161 45.2679Z" fill="#4285F4" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M63.9999 56.7873C67.1826 56.7873 69.8508 55.7318 71.8011 53.9315L67.9916 50.9739C66.9361 51.6812 65.5859 52.0991 63.9999 52.0991C60.9298 52.0991 58.3312 50.0256 57.4043 47.2394H53.4662V50.2935C55.4058 54.1458 59.3921 56.7873 63.9999 56.7873Z" fill="#34A853" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M57.4044 47.2397C57.1686 46.5324 57.0347 45.777 57.0347 45C57.0347 44.2231 57.1686 43.4677 57.4044 42.7604V39.7064H53.4663C52.668 41.2977 52.2125 43.098 52.2125 45C52.2125 46.9021 52.668 48.7024 53.4663 50.2937L57.4044 47.2397Z" fill="#FBBC05" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M63.9999 37.9007C65.7305 37.9007 67.2844 38.4954 68.506 39.6635L71.8868 36.2826C69.8455 34.3805 67.1772 33.2125 63.9999 33.2125C59.3921 33.2125 55.4058 35.854 53.4662 39.7063L57.4043 42.7604C58.3312 39.9742 60.9298 37.9007 63.9999 37.9007Z" fill="#EA4335" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_1_2869" x="0.75" y="0.699999" width="126.5" height="125.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="18.45" />
                                        <feGaussianBlur stdDeviation="15.375" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.266667 0 0 0 0 0.380392 0 0 0 0 0.94902 0 0 0 0.11 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2869" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2869" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                            <svg width="129" height="127" viewBox="0 0 129 127" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer'>
                                <g filter="url(#filter0_d_1_2870)">
                                    <rect x="31.5" y="13" width="66" height="64" rx="15.375" fill="white" shape-rendering="crispEdges" />
                                    <rect x="32.0125" y="13.5125" width="64.975" height="62.975" rx="14.8625" stroke="#E0E0E9" stroke-width="1.025" shape-rendering="crispEdges" />
                                    <path d="M59.1207 56.7875C70.0636 56.7875 76.0479 47.7184 76.0479 39.854C76.0479 39.5965 76.0426 39.3401 76.031 39.0848C77.1954 38.2419 78.2004 37.1983 78.9987 36.0029C77.9326 36.477 76.7855 36.7961 75.5822 36.94C76.8105 36.2032 77.7534 35.0376 78.1983 33.6482C77.0305 34.3413 75.7529 34.8298 74.4206 35.0928C73.3349 33.936 71.7894 33.2125 70.0779 33.2125C66.7925 33.2125 64.1283 35.8778 64.1283 39.1631C64.1283 39.6302 64.1806 40.0844 64.2827 40.5202C59.3381 40.2713 54.9536 37.903 52.0193 34.302C51.4908 35.2103 51.2128 36.2425 51.2137 37.2933C51.2137 39.3581 52.264 41.1809 53.8612 42.2473C52.9165 42.2185 51.9924 41.9632 51.1668 41.5029C51.1659 41.5279 51.1659 41.5523 51.1659 41.579C51.1659 44.4612 53.2166 46.8677 55.9388 47.413C55.4276 47.5522 54.9 47.6227 54.3701 47.6224C53.9874 47.6224 53.6144 47.5847 53.252 47.5151C54.0094 49.8798 56.2056 51.6006 58.8096 51.6487C56.7733 53.2452 54.2083 54.1962 51.4205 54.1962C50.9463 54.1966 50.4724 54.1691 50.0014 54.1137C52.6344 55.802 55.7608 56.7871 59.121 56.7871" fill="#1D9BF0" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_1_2870" x="0.75" y="0.699999" width="127.5" height="125.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="18.45" />
                                        <feGaussianBlur stdDeviation="15.375" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.266667 0 0 0 0 0.380392 0 0 0 0 0.94902 0 0 0 0.11 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2870" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2870" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                            <svg width="128" height="127" viewBox="0 0 128 127" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer'>
                                <g filter="url(#filter0_d_1_2871)">
                                    <rect x="31.5" y="13" width="65" height="64" rx="15.375" fill="white" shape-rendering="crispEdges" />
                                    <rect x="32.0125" y="13.5125" width="63.975" height="62.975" rx="14.8625" stroke="#E0E0E9" stroke-width="1.025" shape-rendering="crispEdges" />
                                    <path d="M75.8446 45C75.8446 38.49 70.5672 33.2125 64.0571 33.2125C57.547 33.2125 52.2696 38.49 52.2696 45C52.2696 50.8835 56.5801 55.7601 62.2153 56.6443V48.4074H59.2224V45H62.2153V42.4031C62.2153 39.4489 63.9751 37.817 66.6676 37.817C67.9573 37.817 69.3062 38.0473 69.3062 38.0473V40.9481H67.8198C66.3555 40.9481 65.8989 41.8567 65.8989 42.7889V45H69.1681L68.6455 48.4074H65.8989V56.6443C71.5341 55.7601 75.8446 50.8835 75.8446 45Z" fill="#1877F2" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_1_2871" x="0.75" y="0.699999" width="126.5" height="125.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="18.45" />
                                        <feGaussianBlur stdDeviation="15.375" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.266667 0 0 0 0 0.380392 0 0 0 0 0.94902 0 0 0 0.11 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2871" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2871" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                            <svg width="124" height="123" viewBox="0 0 124 123" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer'>
                                <g filter="url(#filter0_d_1_2872)">
                                    <rect x="30.5" y="12" width="63" height="63" rx="15.375" fill="white" shape-rendering="crispEdges" />
                                    <rect x="31.0125" y="12.5125" width="61.975" height="61.975" rx="14.8625" stroke="#E0E0E9" stroke-width="1.025" shape-rendering="crispEdges" />
                                    <path d="M70.4876 50.0846C70.1311 50.9082 69.7091 51.6664 69.2202 52.3634C68.5537 53.3137 68.008 53.9714 67.5874 54.3367C66.9355 54.9362 66.237 55.2433 65.489 55.2607C64.9521 55.2607 64.3045 55.1079 63.5507 54.798C62.7944 54.4895 62.0994 54.3367 61.4639 54.3367C60.7975 54.3367 60.0827 54.4895 59.3181 54.798C58.5524 55.1079 57.9355 55.2695 57.4639 55.2855C56.7466 55.316 56.0317 55.0003 55.318 54.3367C54.8626 53.9394 54.2928 53.2584 53.6104 52.2936C52.8781 51.2633 52.2761 50.0686 51.8044 48.7065C51.2993 47.2353 51.0461 45.8106 51.0461 44.4314C51.0461 42.8515 51.3875 41.4888 52.0713 40.347C52.6087 39.4297 53.3237 38.7062 54.2185 38.1751C55.1133 37.6439 56.0801 37.3732 57.1213 37.3559C57.691 37.3559 58.4381 37.5322 59.3666 37.8785C60.2924 38.226 60.8868 38.4022 61.1474 38.4022C61.3423 38.4022 62.0027 38.1962 63.1221 37.7854C64.1808 37.4044 65.0743 37.2466 65.8063 37.3088C67.7897 37.4689 69.2798 38.2507 70.2708 39.6594C68.4969 40.7342 67.6194 42.2396 67.6369 44.1708C67.6529 45.675 68.1986 46.9268 69.2711 47.9207C69.7571 48.382 70.2999 48.7385 70.9038 48.9917C70.7729 49.3715 70.6346 49.7353 70.4876 50.0846ZM65.9387 32.1841C65.9387 33.3632 65.5079 34.464 64.6494 35.4829C63.6133 36.6942 62.3601 37.3942 61.001 37.2838C60.9837 37.1423 60.9737 36.9934 60.9737 36.837C60.9737 35.7051 61.4664 34.4938 62.3414 33.5034C62.7783 33.002 63.3339 32.585 64.0076 32.2524C64.6799 31.9247 65.3159 31.7435 65.9139 31.7125C65.9314 31.8701 65.9387 32.0278 65.9387 32.1841V32.1841Z" fill="black" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_1_2872" x="0.5" y="0" width="123" height="123" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="18" />
                                        <feGaussianBlur stdDeviation="15" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.266667 0 0 0 0 0.380392 0 0 0 0 0.94902 0 0 0 0.11 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2872" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2872" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </div> */}
                        <div className='flex justify-center gap-[12px] py-2  '>
                            <span className='rounded-[15.38px] border p-[20px] cursor-pointer' onClick={() => { signIn("google") }}>
                                <Image src={Google} alt="Apple icon"
                                    width={19}
                                    height={25}


                                />

                            </span>
                            <span className='rounded-[15.38px] border p-[20px] cursor-pointer' onClick={() => { signIn("twitter") }} >
                                <Image src={Twitter} alt="Apple icon"
                                    width={19}
                                    height={25}



                                />

                            </span>
                            <span className='rounded-[15.38px] border p-[20px] cursor-pointer' onClick={() => { signIn("facebook") }} >
                                <Image src={Facebook} alt="Apple icon"
                                    width={19}
                                    height={25}


                                />

                            </span>
                            <span className='rounded-[15.38px] border p-[20px] cursor-pointer'>
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
