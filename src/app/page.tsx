"use client";
import React from 'react';
import Header from '../../components/Header';
import Sidemenu from '../../components/Sidemenu';
import { useSession } from 'next-auth/react';
import Dashboard from './dashboard/Dashboarad';



export default function Home() {
  let {data:session} = useSession();
  return (
    <>
    {
      session && 
      <>
      <Dashboard />
      </>
    }
    
    </>
  );
}
