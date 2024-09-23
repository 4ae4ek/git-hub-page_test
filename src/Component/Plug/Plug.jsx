import React from 'react';

const Plug = () => {
    return (
        <section
            className="flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 to-purple-100 min-h-screen">
            <div className="container mx-auto text-center flex-grow flex flex-col justify-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Sorry!</h1>
                <p className="text-xl text-gray-600 mb-8">
                    There's nothing here yet. Please check back later.
                </p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    className="mx-auto mt-12 w-32 h-32 text-blue-500"
                >
                    <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="4"/>
                    <circle cx="20" cy="24" r="4" fill="currentColor"/>
                    <circle cx="44" cy="24" r="4" fill="currentColor"/>
                    <path d="M20 40c4 4 12 4 16 0" stroke="currentColor" strokeWidth="4" fill="none"
                          strokeLinecap="round"/>
                </svg>
            </div>
        </section>
    )
}

export default Plug