import Image from 'next/image';
import * as React from 'react';

const PhotoCard = () => {
    let photodest = [
        {
            img: "https://external-preview.redd.it/kIF--f0qJzux_vBXNN8gEf7v4wMX6sXuQ6WS1E5dDJI.jpg?auto=webp&s=485d3fb8581f0df23138139c4425bc480dd72d7d",
            topic: "Cozy 5 Stars Apartment",
            desc: "The place is close to Metro Station and bus stop just 2 min by walk and near to  where you can enjoy the night life in London, UK.",
            price: "$899",
            location: "Barcelona, Spain"
        },
        {
            img: "https://officesnapshots.com/wp-content/uploads/2019/02/k2ld-studio-offices-melbourne-12.jpg",
            topic: "Office Studio",
            desc: "The place is close to Metro Station and bus stop just 2 min by walk and near to  where you can enjoy the night life in London, UK.",
            price: "$899",
            location: "London, UK"
        },
        {
            img: "https://www.hotelsinheaven.com/wp-content/uploads/2020/11/carlton-st.-moritz-facade-hotel-1500x842.jpg",
            topic: "Beautiful Castle",
            desc: "The place is close to Metro Station and bus stop just 2 min by walk and near to  where you can enjoy the night life in London, UK.",
            price: "$899",
            location: "Milan, Italy"
        },
    ]
    return (
        <>
            {
                photodest.map((e,i) => {
                    return <div key = {i} className="chartwrapper">
                        <div className="box text-white ">
                            <Image className='w-[100%] h-[100%] ' src={e.img} width={500} height={500} alt="" />
                        </div>
                        <div className="btm-text flex flex-col gap-2  ">
                            <div className='border-b-2 border-slate-200 py-4'>
                                <p className='text-3xl text-slate-700'>{e.topic}</p>
                                <p className='text-xl text-slate-400'>{e.desc}</p>
                            </div>
                            <div className='flex justify-between' >
                                <p className='text-2xl text-slate-900'>
                                    {e.price}/Night
                                </p>
                                <p className='text-lg text-slate-400'>
                                    {e.location}/Night
                                </p>
                            </div>
                        </div>
                    </div>
                })
            }


        </>
    );
}

export default PhotoCard;