"use client"
import React from 'react';
import { signIn, useSession } from 'next-auth/react';
import { FcGoogle } from "react-icons/fc";
import { usePathname, useRouter } from 'next/navigation';

const Login = () => {
    let pathname = usePathname()

 
    
    return ( 
        <>
        <div className="h-screen w-full text-center">
            <h2>Login</h2>
            <div className="h-[90%] w-full flex flex-col items-center justify-center">
                <button 
                className='flex items-center border-slate-400 border rounded-[3rem] px-20 py-5 shadow-md'
                onClick={()=>{
                    signIn();
                }}><p>Sign In With Google</p><span><FcGoogle className='icon font-bold text-xl'/></span></button>
            </div>
        </div>
        </>
     );
}
 
export default Login;