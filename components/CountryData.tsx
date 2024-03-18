import React from 'react';
import CData from '../src/app/lib/RevenueData.json'
import MapChart from './Map';
import { FaGlobe } from 'react-icons/fa6';
type DataType =  {
    country: string;
    value: string;
    percent: string;
}
const CountryData = () => {

    return (
        <>
            <div className='w-[50%] pr-10'>
                <div className='h-20'>
                    <div className={`text-7xl text-white iconbox py-6 px-5 flex items-center justify-center absolute top-[-5%] left-[2%] shadow-lg bg-red-400 rounded-md`}>
                        <FaGlobe />
                    </div>
                    <p className='ml-32 text-4xl text-slate-600'>Global Sales by Top Locations</p>
                </div>

                <ul className='w-100% flex flex-col gap-2 ' >
                    {
                        CData.map((e:DataType,i:number) => {
                            return <li key = {i} className='flex justify-between items-center py-3 border-t-[1px] border-slate-300'>
                                <div>
                                    <p>{e.country}</p>
                                </div>
                                <div className='flex gap-16'>
                                    <p>{e.value}</p>
                                    <p>{e.percent}</p>
                                </div>
                            </li>

                        })
                    }

                </ul>
            </div>

            <div className='w-[50%] flex justify-end items-center px-5'>
                <MapChart />
            </div>

        </>
    );
}

export default CountryData;