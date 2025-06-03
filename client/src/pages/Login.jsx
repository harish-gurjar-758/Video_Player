import React, { useState } from 'react';
import VistroLogo from '../assets/VistroLogo';
import toast, { LoaderIcon } from 'react-hot-toast';
import { loginApi } from '../services/api';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Login() {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();
    const location = useLocation();
    const redirectTo = location.state?.from === "/profile" ? "/profile" : "/";

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        const { email, password } = userData;

        try {
            if (!email) {
                toast.error("Email is required.");
            } else if (!password || password.length < 6) {
                toast.error("Password is required and must be at least 6 characters.");
            } else {
                await loginApi(userData);
                navigate(redirectTo);
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='min-h-screen bg-gray-100 d-flex align-items-center justify-content-center flex-column px-4' style={{ paddingTop: '90px' }}>
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                <div className="flex flex-col items-center mb-6">
                    <VistroLogo className='d-flex align-items-center justify-content-center' />
                    <h2 className="mt-4 text-center text-2xl font-bold text-gray-800">Welcome Back</h2>
                </div>
            </div>

            <form onSubmit={handleSubmit} className='w-50 d-flex align-items-center justify-content-center flex-column gap-3'>
                {/* Email */}
                <div className="form-controll bg-secondary w-50 p-2 d-flex flex-column rounded text-light">
                    <label htmlFor="email">Email</label>
                    <input
                        id='email'
                        type="email"
                        name='email'
                        value={userData.email}
                        onChange={handleChange}
                        placeholder='harishgurjar@gmail.com'
                        className='form-control bg-transparent text-light'
                    />
                </div>
                {/* Password */}
                <div className="form-controll bg-secondary w-50 p-2 d-flex flex-column rounded text-light">
                    <label htmlFor="password">Password</label>
                    <div>
                        <input
                            type="password"
                            name='password'
                            value={userData.password}
                            onChange={handleChange}
                            placeholder='******'
                            className='form-control bg-transparent text-light'
                        />
                    </div>
                </div>

                {error && <p className='text-sm text-red-500'>{error}</p>}

                <button type="submit" class="btn btn-primary">
                    {loading ? (
                        <div className='d-flex align-items-center justify-content-center gap-2'>
                            Loading.. <LoaderIcon />
                        </div>
                    ) : (
                        'LogIn'
                    )}
                </button>
            </form>
        </div>
    );
}
