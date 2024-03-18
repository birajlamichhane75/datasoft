"use client"
import React, { useState } from 'react';
import './dstyle.css'

import Card from '../../../components/Card';
import { MdContentCopy } from "react-icons/md";
import { FaShop } from "react-icons/fa6";
import { BiInfoCircle } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import CountryData from '../../../components/CountryData';
import PhotoCard from '../../../components/Photo';
import ChartBox from '../../../components/Chartbox';

export type CardDets = {
    name: string,
    icon: React.JSX.Element,
    value: string,
    msg: string,
    color: string
}

const Dashboard = () => {

    const cardDets: CardDets[] = [
        {
            name: "Used Space",
            icon: <MdContentCopy className='bg-orange-400' />,
            value: "49/50 GB",
            msg: "Get more space",
            color: "orange-400"
        },
        {
            name: "Revenue",
            icon: <FaShop className='bg-green-900' />,
            value: "$34,245",
            msg: ":last 24 hours",
            color: "green-900"
        },
        {
            name: "Fixed Issues",
            icon: <BiInfoCircle className='bg-red-700' />,
            value: "75",
            msg: "Tracked from Github",
            color: "red-700"
        },
        {
            name: "Followers",
            icon: <FaTwitter className='bg-cyan-600' />,
            value: "+245",
            msg: "Just updated",
            color: "cyan-600"
        },
    ]

    return (
        <>
            <div className="d-page flex flex-col w-full px-10 py-16 gap-24">
                <div className='d-top grid grid-cols-4 gap-14'>
                    {
                        cardDets.map((e: CardDets, i: number) => {
                            return <Card key={i} name={e.name} icon={e.icon} value={e.value} msg={e.msg} color={e.color} />
                        })
                    }
                </div>

                <div className='d-mid flex justify-between px-10 py-3 bg-white relative'>
                    <CountryData />
                </div>


                <div className='d-umid grid grid-cols-3 gap-12 mt-20'>
                    <ChartBox />
                </div>



                <div className='d-lmid'>
                    <p className='text-5xl text-slate-700 mb-40'>Manage Listings</p>
                    <div className='grid grid-cols-3 gap-12'>
                        <PhotoCard />
                    </div>

                </div>
            </div>
        </>
    );
}

export default Dashboard;