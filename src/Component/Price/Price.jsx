import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

const handleEmailClick = () => {
    // Сгенерируем строку mailto с параметрами
    const email = "example@example.com";
    const subject = "Book a demo";
    const body = "Hello, i want to book your demo, and receive update on this address.";

    // Откроется почтовое приложение по умолчанию
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const PricingToggle = ({isMonthly, onToggle}) => {
    return (
        <div className="flex justify-center mb-12">
            <button
                className={`px-6 py-2 ${isMonthly ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'} rounded-l-full hover:bg-blue-500`}
                onClick={() => onToggle(true)}
            >
                Monthly
            </button>
            <button
                className={`px-6 py-2 ${isMonthly ? 'bg-white text-blue-600 border border-blue-600' : 'bg-blue-600 text-white'} rounded-r-full hover:bg-blue-500`}
                onClick={() => onToggle(false)}
            >
                Yearly
            </button>
        </div>
    );
};

const PricingPlan = ({ title, price, description, features, buttonText, isHighlighted, onClick, url }) => {
    const planClass = isHighlighted ? "bg-blue-600 text-white" : "bg-white text-gray-800";

    return (
        <div className={`${planClass} shadow-lg rounded-lg p-6`}>
            <h2 className={`text-xl font-bold mb-4 ${isHighlighted ? 'text-white' : 'text-gray-800'}`}>{title}</h2>
            <p className="text-4xl font-bold mb-4">{price}</p>
            <p className="mb-8">{description}</p>
            <ul className="text-left space-y-4 mb-8">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <span className={`${isHighlighted ? 'text-white' : 'text-blue-600'}`}>&#10003;</span> {feature}
                    </li>
                ))}
            </ul>
            <NavLink to={url}>
                <button
                    className={`w-full py-3 ${isHighlighted ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'} rounded-full hover:bg-blue-500`} onClick={onClick}
                >
                    {buttonText}
                </button>
            </NavLink>
        </div>
    );
};

const Price = () => {
    const [isMonthly, setIsMonthly] = useState(true);

    const handleToggle = (monthly) => {
        setIsMonthly(monthly);
    };

    return (
        <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-100 min-h-screen flex items-center">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Pricing & Plans</h1>
                <p className="text-lg text-gray-600 mb-8">Options to suit teams of all sizes and needs. Buy annually and
                    save 10% on Team plans.</p>
                <PricingToggle isMonthly={isMonthly} onToggle={handleToggle}/>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <PricingPlan
                        title="Starter"
                        price="$0"
                        description="Starter pack for new users to get acquainted with the app."
                        features={[
                            "5 users",
                            "50 test cases",
                            "Test Cases AI BUILDER"
                        ]}
                        buttonText="Portal Demo"
                        url="/git-hub-page_test/demoPortal"
                        onClick={() => {
                        }}
                    />
                    <PricingPlan
                        title="Individual"
                        price={isMonthly ? "$20/month" : "$240/year"}
                        description="Professional test cases management system for small teams."
                        features={[
                            "10 users",
                            "Test Cases AI BUILDER",
                            "Trained model for your project",
                            "Manage your team's performance"
                        ]}
                        buttonText="Pay with Credit Card"
                        isHighlighted={true}
                        onClick={() => {
                        }}
                    />
                    <PricingPlan
                        title="Enterprise"
                        price="Custom"
                        description="AI-powered QA teams management system tailored to your needs."
                        features={[
                            "SAML SSO support",
                            "Email support",
                            "Access to solutions advisor",
                            "AI BUILDER",
                            "Trained model for your project",
                            "Personal Assistance"
                        ]}
                        buttonText="Contact Sales"
                        onClick={handleEmailClick}
                    />
                </div>
            </div>
        </section>
    );
};

export default Price;
