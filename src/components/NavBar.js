import React from "react";

import { toggleTheme } from "../store/redux/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useNavigation } from "react-router-dom";

const pages = [
    {
        name: 'Home',
        route: '/'
    },
    {
        name: 'About',
        route: '/about'
    },
    {
        name: 'Work',
        route: '/work'
    },
    {
        name: 'Contact',
        route: '/contact'
    },
]

function NavButton(props) {

    const navigate = useNavigate();

    const page = props.page;

    const theme = useSelector((state) => state.theme.theme);

    return(
        <>            
            <div 
                className="nav-button" 
                onClick={() => navigate(page.route)}
                style={theme === 'dark' ? {color: '#C0C0C0'} : {}}
                >
                {page.name}
            </div>
        </>
    );
}

export default function NavBar(props) {

    const dispatch = useDispatch();

    const theme = useSelector((state) => state.theme.theme);

    return (
        <>
            <div className='nav-container'>

                <img 
                    src={theme === 'light' ? require("../images/cookie-light.png"): require("../images/cookie-dark.png")}
                    style={{width: '3rem', height: '3rem'}}
                    onClick={() => dispatch(toggleTheme({}))}
                />

                <div>
                    {pages.map(page => {
                        return <NavButton page={page} />
                    })}
                </div>               

            </div>
        </>
    );
}