import React from "react";

import { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import NavBar from "../components/NavBar";

import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

export default function HomePage(props) {

    const theme = useSelector((state) => state.theme.theme);
    

    return (
        <>
            <NavBar />
            
            <img
                src={theme === 'dark' ? require('../images/user-icon-dark.png') : require('../images/user-icon-light.png')} 
                style={{width: '2rem', height: '2rem', marginTop: '4rem'}}
                />
                
            <p style={{margin: 0, marginTop: '0.5rem', color: theme === 'dark' ? 'white' : 'black'}}>
                Lorem Ipsum is simply dummy text.
            </p>

            <h1 style={{width: '50%', marginTop: 0, marginBottom: 0, textAlign: 'center', fontSize: '3rem', lineHeight: '3.5rem', color: theme === 'dark' ? 'white' : 'black'}}>
                Lorem Ipsum has been the industry's standard dummy text
            </h1>

            <p style={{width: '40%', textAlign: 'center', marginTop: '1rem', color: theme === 'dark' ? 'white' : 'black'}}>
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            <div style={{display: 'flex', flexDirection: 'row'}}>
                <PrimaryButton 
                    text={"SAY HELLO"}
                    />
                <SecondaryButton 
                    text={"DOWNLOAD CV"}
                    />
            </div>
            
        </>
    );
}