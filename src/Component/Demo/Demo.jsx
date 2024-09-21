import React from 'react';
import dashboard_icon from '../../icons/dashboard_icon.png'
import test_runs_icon from '../../icons/test_runs_icon.png'
import test_cases_icon from '../../icons/test_cases_icon.png'
import ai_icon from '../../icons/ai_icon.png'
import reports_icon from '../../icons/reports_icon.png'
import settings_icon from '../../icons/settings_icon.png'
import bell_icon from '../../icons/bell_icon.png'
import settings_menu_icon from '../../icons/settings_menu_icon.png'
import alert_icon from '../../icons/alert_icon.png'
import profile_photo from '../../icons/profile_photo.png'
import graph from '../../images/graph.png'
import logout_icon from '../../icons/logout_icon.png'
import test_cycles_icon from '../../icons/test_cycles_icon.png'
import total_test_cases_icon from '../../icons/total_test_cases_icon.png'

const Disclaimer = () => (
    <div className="text-center text-red-600 font-semibold my-4">
        Not Final Design. Work in progress.
    </div>
)

const Demo = () => {
    return (
        <div>
            <Disclaimer/>
            <div className="border-4 border-black p-4 m-4">
                <div className="flex">
                    <aside className="bg-white w-64 h-screen shadow-md">
                        <div className="p-6">
                            <div className="text-3xl font-bold text-blue-600 mb-6">AITested</div>
                            <nav className="space-y-4">
                                <a href="#" className="block text-blue-600 font-semibold">
                                    <img src={dashboard_icon} alt="icon"
                                         className="inline-block mr-2"/> Dashboard
                                </a>
                                <a href="#" className="block text-gray-600">
                                    <img src={test_runs_icon} alt="icon"
                                         className="inline-block mr-2"/> Test Runs
                                </a>
                                <a href="#" className="block text-gray-600">
                                    <img src={test_cases_icon} alt="icon"
                                         className="inline-block mr-2"/> Test Case
                                </a>
                                <a href="#" className="block text-gray-600">
                                    <img src={ai_icon} alt="icon" className="inline-block mr-2"/> Chat
                                </a>
                                <a href="#" className="block text-gray-600">
                                    <img src={reports_icon} alt="icon"
                                         className="inline-block mr-2"/> Reports
                                </a>
                                <a href="#" className="block text-gray-600">
                                    <img src={settings_icon} alt="icon"
                                         className="inline-block mr-2"/> Settings
                                </a>
                            </nav>
                            <div className="mt-10 bg-blue-50 p-4 rounded-lg text-center">
                                <p>Do you want to do more than 50 tests?</p>
                                <button
                                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500">See
                                    tariffs
                                </button>
                            </div>
                            <div className="mt-8 text-blue-600 text-center">
                                <a href="#"><img src={logout_icon} alt="icon"
                                                 className="inline-block mr-2"/>Log out</a>
                            </div>
                        </div>
                    </aside>

                    <main className="flex-1 p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-2xl font-semibold text-gray-800">Team Dashboard</h1>
                            <div className="flex space-x-4 items-center">
                                <button className="px-4 py-2 bg-green-100 text-green-600 rounded-full">Public</button>
                                <input type="text" placeholder="Search" className="px-4 py-2 border rounded-md"/>
                                <img src={bell_icon} alt="Additional Image 1"
                                     className="w-10 h-10 rounded-full"/>
                                <img src={settings_menu_icon} alt="Additional Image 2"
                                     className="w-10 h-10 rounded-full"/>
                                <img src={alert_icon} alt="Additional Image 3"
                                     className="w-10 h-10 rounded-full"/>
                                <img src={profile_photo} alt="User Profile"
                                     className="w-10 h-10 rounded-full"/>
                                <span className="text-gray-800">John W. Smith</span>
                            </div>
                        </div>

                        <div id="mobile-menu" className="md:hidden hidden bg-white px-4 py-2 space-y-2">
                            <a href="#" className="block hover:text-blue-600">About Us</a>
                            <a href="#" className="block hover:text-blue-600">Price</a>
                            <a href="#" className="block hover:text-blue-600">Our Services</a>
                            <a href="#" className="block hover:text-blue-600">Contact Us</a>
                            <button
                                className="w-full px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500">Portal
                                Demo
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="flex justify-center items-center mb-2">
                                    <img src={test_cycles_icon} alt="Icon 1" className="w-5 h-5 mr-2"/>
                                    <p className="text-gray-600">Test cycles in progress</p>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">154</h2>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="flex justify-center items-center mb-2">
                                    <img src={test_cases_icon} alt="Icon 2" className="w-5 h-5 mr-2"/>
                                    <p className="text-gray-600">Test case executed</p>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">34</h2>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="flex justify-center items-center mb-2">
                                    <img src={total_test_cases_icon} alt="Icon 3"
                                         className="w-5 h-5 mr-2"/>
                                    <p className="text-gray-600">Total test cases</p>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">2,089</h2>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="flex justify-center items-center mb-2">
                                    <p className="text-gray-600">Total test plans created</p>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">56,089</h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold mb-4">Jira Bugs by Team Member</h3>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full">
                                        <thead>
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bug</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Member</th>
                                        </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Can't
                                                login in the app
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">In
                                                Progress
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">High</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">08/07/2024</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm"><img
                                                src={profile_photo} className="w-8 h-8 rounded-full"
                                                alt="Member"/></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="text-right mt-4">
                                    <a href="#" className="text-blue-600 hover:underline">See all</a>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold mb-4">Jira Bugs by Team</h3>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full">
                                        <thead>
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bug</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
                                        </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Can't
                                                login in the app
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">In
                                                Progress
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">High</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">08/07/2024</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">Team A</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="text-right mt-4">
                                    <a href="#" className="text-blue-600 hover:underline">See all</a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                            <h3 className="text-lg font-semibold mb-4">Automation Runs</h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full">
                                    <thead>
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assignee</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type
                                            of Testing
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Labels</th>
                                    </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600"><a href="#">SSO
                                            Integration</a></td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">J001</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">08/08/2024</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Team</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Manual</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">High</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">In Progress
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Regression
                                            Testing
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="text-right mt-4">
                                <a href="#" className="text-blue-600 hover:underline">See all</a>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-4">Test Cycles Active</h3>
                            <img src={graph} alt="Chart"/>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Demo;