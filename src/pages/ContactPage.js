import React from "react";

import { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import NavBar from "../components/NavBar";

import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

export default function ContactPage(props) {

    const theme = useSelector((state) => state.theme.theme);    

    return (
        <>
            <NavBar />
            
            <p style={{margin: 0, marginTop: '3rem', color: theme === 'dark' ? 'white' : 'black', fontSize: '3rem'}}>
                Contact
            </p>

            <p style={{width: '40%', textAlign: 'center', marginTop: '1rem', color: theme === 'dark' ? 'white' : 'black'}}>
            We're thrilled to hear from you! Whether you have a question, suggestion, or just want to say hello, we're here to assist you. Feel free to reach out to us using the contact information provided below or by filling out the contact form. We value your feedback and strive to respond to all inquiries in a timely manner.
            <br></br><br></br>
            Contact Information:<br></br>
            Email: info@example.com<br></br>
            Phone: +1 (555) 123-4567<br></br>
            Address: 123 Main Street, Anytown, USA<br></br>
            </p>
            
        </>
    );
}