import React from 'react'
import Image from 'next/image'
import { Poppins, Inter } from 'next/font/google';
import img from "../../../../images/login.jpeg"
const _poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['normal', 'italic'],
});

export default function page() {
    return (

        <div className="col-span-12 lg:col-span-6  bg-login rounded-tr-[100px] rounded-br-[100px] shadow-lg shadow-black-500/50 ">
            <div className='p-[80px] ' style={{ fontFamily: _poppins.style.fontFamily }}>
                <h1 className='text-[50px] font-bold '>Welcome to <br /> <span className='main-color'> Elevate</span> </h1>

                <p className='max-w-[482px] pb-[80px]' >Quidem autem voluptatibus qui quaerat aspernatur architecto natus</p>
                <Image
                    src={img}
                    alt="Login Image"
                    width={408}
                    height={434.59}
                />








            </div>
        </div>
        
    )
}
