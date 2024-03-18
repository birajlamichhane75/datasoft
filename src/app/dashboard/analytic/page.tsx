"use client"
import React from 'react';
import ChartBox from '../../../../components/Chartbox';

const Analytic = () => {
    return (
        <>
            <div className='d-umid analytic grid grid-cols-1 gap-40 w-[50%] mx-auto py-[10rem]'>
                <ChartBox />
            </div>
        </>
    );
}

export default Analytic;