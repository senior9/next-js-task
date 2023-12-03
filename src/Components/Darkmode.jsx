import { useTheme } from 'next-themes';
import React, { useState } from 'react';

const Darkmode = () => {
    const {systemTheme,setTheme,themes} = useTheme();
    const [mountedTheme,setMounted] = useState(false);
    return (
        <div>
            
        </div>
    );
};

export default Darkmode;