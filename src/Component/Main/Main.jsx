import React from 'react';
import dashboard from '../../images/dashboard.png';
import one from '../../images/feature1.png';
import two from '../../images/feature2.png';
import thee from '../../images/feature3.png';
import four from '../../images/feature4.png';

const handleEmailClick = () => {
    // Сгенерируем строку mailto с параметрами
    const email = "example@example.com";
    const subject = "Book a demo";
    const body = "Hello, i want to book your demo, and receive update on this address.";

    // Откроется почтовое приложение по умолчанию
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const Hero = () => {
    return (
        <section className="bg-gradient-to-r from-blue-50 to-purple-100 py-20">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Designed for Testers by Testers</h1>
                <p className="text-xl text-gray-600 mb-8">Empower your QA team. The comprehensive platform for efficient
                    test management and quality assurance.</p>
                {/*Сделать скрипт для отправки email*/}
                <div className="flex justify-center">
                    <input type="email" placeholder="Enter your email address"
                           className="px-4 py-2 border border-gray-300 rounded-l-md w-1/3 focus:outline-none focus:border-blue-500"/>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-500" onClick={handleEmailClick}>Book a Demo
                    </button>
                </div>
                <img src={dashboard} alt="Dashboard" className="mx-auto mt-12 rounded-lg shadow-lg"/>
            </div>
        </section>
    )
}

const Features = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Intelligent Test Case Generation</h2>
                <p className="text-gray-600 mb-8">Say goodbye to the manual, repetitive task of writing test cases.
                    Our AI
                    tool automates generating relevant and accurate test cases by analyzing your software's
                    requirements
                    and specifications.</p>
                <img src={one} alt="AI Test Case"
                     className="mx-auto md:mx-0 rounded-lg shadow-lg"/>
            </div>
            <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Dynamic Adaptation</h2>
                <p className="text-gray-600 mb-8">As your software evolves, so do your testing needs. Our AI tool
                    dynamically adapts to changes in your software, updating and creating the next set of test cases
                    in
                    real-time.</p>
                <img src={two} alt="Dynamic Adaptation"
                     className="mx-auto md:mx-0 rounded-lg shadow-lg"/>
            </div>
            <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Predictive Analytics</h2>
                <p className="text-gray-600 mb-8">Utilize the power of AI to predict potential problem areas in your
                    software. Our tool analyzes historical data and identifies patterns that could indicate future
                    risks.</p>
                <img src={thee} alt="Predictive Analytics"
                     className="mx-auto md:mx-0 rounded-lg shadow-lg"/>
            </div>
            <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Seamless Integration</h2>
                <p className="text-gray-600 mb-8">Our AI tool seamlessly integrates with your existing development
                    and
                    testing environments, providing a smooth transition and immediate efficiency gains.</p>
                <img src={four} alt="Seamless Integration"
                     className="mx-auto md:mx-0 rounded-lg shadow-lg"/>
            </div>
        </div>
    </section>
)

const CTA = () => (
    // хз что это узнать что впихнуть
    <section className="bg-gradient-to-r from-blue-50 to-purple-100 py-20">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to get started?</h2>
            <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500" onClick={handleEmailClick}>Try for free
            </button>
        </div>
    </section>
)

const Main = () => (
    <>
        <Hero/>
        <Features/>
        <CTA/>
    </>
)

export default Main;