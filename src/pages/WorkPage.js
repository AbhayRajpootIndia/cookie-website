import React from "react";

import { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import NavBar from "../components/NavBar";

import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

export default function WorkPage(props) {

    const theme = useSelector((state) => state.theme.theme);

    const [width, setWidth]   = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const updateDimensions = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
  }

  useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
  }, [])

    

    return (
        <>
        <NavBar 
        height={height}
        width={width}
        />
            
                
            <p style={{margin: 0, marginTop: '3rem', color: theme === 'dark' ? 'white' : 'black', fontSize: '3rem'}}>
                Work
            </p>

            <p style={{width: '40%', textAlign: 'center', marginTop: '1rem', color: theme === 'dark' ? 'white' : 'black'}}>
            React developers are the virtuosos of modern web development, wielding their expertise to create captivating and interactive user interfaces. With their deep understanding of React, a powerful JavaScript library, they craft dynamic web applications that delight users and enhance the overall user experience.
            </p>
            
        </>
    );
}