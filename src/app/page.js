"use client"
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useProject } from './context';
import Sidebar from "./sidebar";
import Navbar from './navbar';
import Home from './home';
const page = () => {

  return (
    <>
      <Home />
    </>
  );
}

export default page;