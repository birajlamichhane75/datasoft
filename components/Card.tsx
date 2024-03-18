import { CardDets } from '@/app/dashboard/Dashboarad';
import React from 'react';
import { MdContentCopy } from 'react-icons/md';


const Card = ({ icon,name,msg,value,color }: CardDets) => {
    return (
        <>
            <div className="card bg-white px-5 py-5 flex flex-col gap-5 relative border-black rounded-lg ">
                <div className="flex justify-between items-start border-b-2 pb-7">
                    <div>
                        <div className={`card-icon text-7xl text-white iconbox py-8 px-8 flex items-center justify-center absolute top-[-20%] left-[5%] bg-${color} rounded-md`}>
                            {icon}
                        </div>
                    </div>
                    <div className='text-right'>
                        <p className='text-slate-500 text-xl'>{name}</p>
                        <p className='text-5xl'>{value}</p>
                    </div>

                </div>
                <div className="">
                    <span></span>
                    <p>{msg}</p>
                </div>
            </div>
        </>
    );
}

export default Card;