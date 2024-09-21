import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

const HeaderNavLink = props => {
    let url = "git-hub-page_test" + props.url
    return (
        <NavLink to={url}>
            <div className="hover:text-blue-600">{props.text}</div>
        </NavLink>
    )
}

const Header = (props) => {
    const [menuActive, setMenuActive] = useState(false);
    return (
        <div className="bg-white py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
                <NavLink to="git-hub-page_test/">
                    <div className="text-2xl md:text-3xl font-bold text-blue-600">AITested</div>
                </NavLink>

                {/*Hamburger Icon for mobile*/}
                <div className="md:hidden">
                    <button id="menu-btn" className="focus:outline-none" onClick={() => setMenuActive(!menuActive)}>
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                {/*Navigation Menu*/}
                <nav id="menu" className="hidden md:flex space-x-4 text-lg">
                    <HeaderNavLink text='About Us' url='/aboutUs'></HeaderNavLink>
                    <HeaderNavLink text='Price' url='/price'></HeaderNavLink>
                    <HeaderNavLink text='Our Services' url='/ourServices'></HeaderNavLink>
                    <HeaderNavLink text='Contact Us' url='/contacts'></HeaderNavLink>
                </nav>
                <NavLink to="git-hub-page_test/demoPortal">
                    <button
                        className="hidden md:block px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500">Portal
                        Demo
                    </button>
                </NavLink>
            </div>


            {/*Mobile Menu*/}
            <div id="mobile-menu" className={menuActive ? "bg-white px-4 py-2 space-y-2":"hidden md:hidden bg-white px-4 py-2 space-y-2"}>
                <HeaderNavLink text='About Us' url='/aboutUs'></HeaderNavLink>
                <HeaderNavLink text='Price' url='/price'></HeaderNavLink>
                <HeaderNavLink text='Our Services' url='/ourServices'></HeaderNavLink>
                <HeaderNavLink text='Contact Us' url='/contacts'></HeaderNavLink>
                <NavLink to="git-hub-page_test/demoPortal">
                    <button className="w-full px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500">Portal Demo</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Header;