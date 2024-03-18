"use client"
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import {  usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react';

const Header = () => {
    let { data: session } = useSession();
    let pathname = usePathname();

    

    return (

        <div className='w-[100%] px-28 py-5 flex items-center justify-between bg-[#ffffff] border-b-2 border-slate-200 '>
            <div>
                <h3>DataSoft</h3>
            </div>
            <div>
                <ul className='flex items-center gap-16'>
                    <li>Analytic</li>
                    <li>Product</li>
                    <li>Profile</li>
                </ul>
            </div>
            {
                session ? <div className='flex items-center gap-3'>
                    <Image
                        className='rounded-full'
                        src={`${session?.user?.image}`} height={50} width={50} alt="" />
                    <h4>{session?.user?.name}</h4>
                </div> :
                    <>
                        <button
                            onClick={() => {
                                signIn()
                            }}
                            className='btn'>Sign In</button>
                    </>
            }
        </div>

    );
}

export default Header;