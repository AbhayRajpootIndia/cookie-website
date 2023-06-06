import React from "react";

import { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import NavBar from "../components/NavBar";

import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

export default function AboutPage(props) {

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
                About
            </p>

            <p style={{width: '40%', textAlign: 'center', marginTop: '1rem', color: theme === 'dark' ? 'white' : 'black'}}>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
            </p>
            
        </>
    );
}