import React from 'react';
import {NavLink} from "react-router-dom";

const FooterLink = (props) => {
    return (
        <li>
            <NavLink to={props.url} className="hover:underline">{props.text}</NavLink>
        </li>
    )
}

const LinkGroup = (props) => {
    return (
        <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">{props.text}</h4>
            <ul>
                {props.children}
            </ul>
        </div>
    )
}

const Footer = (props) => {
    return (
        <div className="bg-blue-800 text-white py-12">
            <div className="container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 px-4">

                <div>
                    <h3 className="text-lg font-semibold mb-4">AITested</h3>
                    <p>Empower your testing team with AI-driven solutions tailored to your business needs.</p>
                </div>

                <LinkGroup text={"Platform"}>
                    <FooterLink text={"Why AI Tested"} />
                    <FooterLink text={"Feature Management"} />
                    <FooterLink text={"Automatic Scheduling"} />
                    <FooterLink text={"Integration"} />
                </LinkGroup>

                <LinkGroup text={"Company"}>
                    <FooterLink text={"About Us"} />
                    <FooterLink text={"Solutions"} />
                    <FooterLink text={"Career"} />
                    <FooterLink text={"Press"} />
                </LinkGroup>

                <LinkGroup text={"Resources"}>
                    <FooterLink text={"Blog"} />
                    <FooterLink text={"Help Center"} />
                    <FooterLink text={"Tutorials"} />
                    <FooterLink text={"FAQ"} />
                </LinkGroup>
            </div>
            <div className="mt-12 text-center text-sm px-4">
                <p>© 2024 AITested. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;