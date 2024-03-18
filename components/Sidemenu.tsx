/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
"use client"
import React, { JSXElementConstructor, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { MdArrowForwardIos } from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { signOut, useSession } from 'next-auth/react';
import { MdDashboard } from "react-icons/md";
import { useRouter } from 'next/navigation';

const Sidemenu = () => {
    let { data: session } = useSession();
    const barRef = useRef<HTMLDivElement>(null);
    const closeref = useRef<HTMLUListElement>(null);
    const [togglebar, settogglebar] = useState(false);
    let router = useRouter();
    if (!session) {
        if (barRef.current) {
            barRef.current.style.display = "none"
        }
    }

    closeref.current?.addEventListener("click", () => {
        settogglebar(false)
    })

    if (barRef.current) {
        if (togglebar) {
            barRef.current.style.width = "18rem"
        }
        else {
            barRef.current.style.width = "5rem"
        }

    }


    let openbar = () => {
        settogglebar(!togglebar)
    }

    return (
        <>
            <div ref={barRef} className='w-[5rem] h-[100vh] bg-slate-300 py-5 fixed z-20 left-0 top-0 flex flex-col gap-20 items-start overflow-hidden transition-all rounded-xl'>
                <div className='border-b-slate-500 border-b-2 w-full pl-5 py-7'>
                    <button onClick={openbar}><MdArrowForwardIos className='icon' /></button>
                </div>
                <ul className='w-full list flex flex-col gap-y-12 items-start pl-5' ref={closeref}>
                    <Link href='/dashboard'>
                        <li>
                            <span><MdDashboard className='icon' /></span>
                            <p>Dashboard</p>
                        </li>
                    </Link>
                    <Link href='/dashboard/analytic'>
                        <li>
                            <span><IoMdAnalytics className='icon' /></span>
                            <p>Analytic</p>
                        </li>
                    </Link>
                    <Link href='/dashboard/profile'>
                        <li>
                            <span><CgProfile className='icon' /></span>
                            <p>Profile</p>
                        </li>
                    </Link>
                    <Link href='/dashboard/setting'>
                        <li>
                            <span><IoSettings className='icon' /></span>
                            <p>Setting</p>
                        </li>
                    </Link>
                    <button onClick={() => {
                        signOut()
                        router.refresh()
                        
                    }}>
                        <li>
                            <span><BiLogOut className='icon' /></span>
                            <p>Logout</p>
                        </li>
                    </button>
                </ul>
            </div>
        </>
    );
}

export default Sidemenu;
