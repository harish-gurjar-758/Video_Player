import React from 'react';
import VistroLogo from '../assets/VistroLogo';

export default function Login() {
    const handleSubmit = async () => {

    }
    return (
        <div className='min-h-screen bg-gray-100 d-flex align-items-center justify-content-center flex-column px-4'
            style={{ paddingTop: '90px' }}
        >
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                <div className="flex flex-col items-center mb-6">
                    <VistroLogo className='d-flex align-items-center justify-content-center' />
                    <h2 className="mt-4 text-center text-2xl font-bold text-gray-800">Welcome Back</h2>
                </div>
            </div>

            <form onSubmit={handleSubmit} className='w-50 border border-primary'>
                <div className="form-controll w-20 border border-dark">
                    <label htmlFor="email">
                        Email
                    </label>
                    <input
                        type="text"
                    />
                </div>
            </form>
        </div>
    )
}
