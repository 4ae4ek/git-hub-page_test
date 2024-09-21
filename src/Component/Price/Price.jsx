import React from 'react';
import {NavLink} from "react-router-dom";

const Price = (props) => {
    return (
        <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-100">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Pricing & Plans</h1>
                <p className="text-lg text-gray-600 mb-8">Options to suit teams of all sizes and needs. Buy annually and
                    save 10% on Team plans.</p>
                <div className="flex justify-center mb-12">
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-l-full hover:bg-blue-500">Monthly</button>
                    <button className="px-6 py-2 bg-white text-blue-600 border border-blue-600 rounded-r-full hover:bg-blue-50">Yearly</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Starter</h2>
                        <p className="text-4xl font-bold text-gray-800 mb-4">$0</p>
                        <p className="text-gray-600 mb-8">Starter pack for new users to get acquainted with the app.</p>
                        <ul className="text-left text-gray-600 space-y-4 mb-8">
                            <li className="flex items-center"><span className="text-blue-600">&#10003;</span> 5 users
                            </li>
                            <li className="flex items-center"><span className="text-blue-600">&#10003;</span> 50 test
                                cases
                            </li>
                            <li className="flex items-center"><span className="text-blue-600">&#10003;</span> Test Cases
                                AI BUILDER
                            </li>
                        </ul>
                        <NavLink to="git-hub-page_test/demoPortal">
                            <button className="w-full py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500">Portal
                                Demo
                            </button>
                        </NavLink>
                    </div>

                    <div className="bg-blue-600 text-white shadow-lg rounded-lg p-6">
                        <h2 className="text-xl font-bold mb-4">Individual</h2>
                        <p className="text-4xl font-bold mb-4">$20/month</p>
                        <p className="mb-8">Professional test cases management system for small teams.</p>
                        <ul className="text-left space-y-4 mb-8">
                            <li className="flex items-center"><span className="text-white">&#10003;</span> 10 users</li>
                            <li className="flex items-center"><span className="text-white">&#10003;</span> Test Cases AI
                                BUILDER
                            </li>
                            <li className="flex items-center"><span className="text-white">&#10003;</span> Trained model
                                for your project
                            </li>
                            <li className="flex items-center"><span className="text-white">&#10003;</span> Manage your
                                team's performance
                            </li>
                        </ul>
                        <button className="w-full py-3 bg-white text-blue-600 rounded-full hover:bg-blue-50">Pay with
                            Credit card
                        </button>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Enterprise</h2>
                        <p className="text-4xl font-bold text-gray-800 mb-4">Custom</p>
                        <p className="text-gray-600 mb-8">AI-powered QA teams management system tailored to your
                            needs.</p>
                        <ul className="text-left text-gray-600 space-y-4 mb-8">
                            <li className="flex items-center"><span className="text-blue-600">&#10003;</span> SAML SSO
                                support
                            </li>
                            <li className="flex items-center"><span className="text-blue-600">&#10003;</span> Email
                                support
                            </li>
                            <li className="flex items-center"><span className="text-blue-600">&#10003;</span> Access to
                                solutions advisor
                            </li>
                            <li className="flex items-center"><span className="text-blue-600">&#10003;</span> AI BUILDER
                            </li>
                            <li className="flex items-center"><span className="text-blue-600">&#10003;</span> Trained
                                model for your project
                            </li>
                            <li className="flex items-center"><span className="text-blue-600">&#10003;</span> Personal
                                Assistance
                            </li>
                        </ul>
                        <button className="w-full py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500">Contact
                            sales
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Price;