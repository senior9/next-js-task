"use client"
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import {MdLightMode} from "react-icons/md"
import {BsFillMoonFill} from "react-icons/bs"

const Darkmode = () => {
    const {systemTheme,setTheme,themes} = useTheme();
    const [mountedTheme,setMounted] = useState(false);
    const currentTheme = themes === "system" ? systemTheme:themes;
    useEffect(()=>
        setMounted(true)
        ,[])
    return (
        <div>
        {
         mountedTheme &&(    currentTheme==="dark"? (<MdLightMode className='cursor-pointer hover:text-amber-500 ' onClick={()=>setTheme("light")}/>):(<BsFillMoonFill className='cursor-pointer hover:text-amber-500' onClick={()=>setTheme("dark")} />)  
        )}     
        </div>
    );
};

export default Darkmode;