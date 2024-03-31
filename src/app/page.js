"use client"
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useProject } from './context';
import Sidebar from "./sidebar";
import Navbar from './navbar';
import Home from './home';
import FormLogin from './form';
const Page = () => {
  const { isLogged } = useProject();
  return (
    <>
      {isLogged ? <Home /> : <FormLogin />}
    </>
  );
}

export default Page;