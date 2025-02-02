'use client';

import React, { useState } from 'react';
import Header from '@/components/Header'; // Import Header component
import Navbar from '@/components/Navbar'; // Import Navbar component
import Swal from 'sweetalert2'; // Import SweetAlert2

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if email and password are valid
    if (formData.email === '' || formData.password === '') {
      Swal.fire({
        title: 'Error!',
        text: 'Please enter both email and password.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    // Simulate successful login (You can replace this with actual authentication logic)
    Swal.fire({
      title: 'Login Successful!',
      text: 'You have logged in successfully.',
      icon: 'success',
      confirmButtonText: 'OK',
    }).then(() => {
      // Redirect or clear fields (e.g., redirect to dashboard)
      // For now, reset the form
      setFormData({
        email: '',
        password: '',
      });
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header Section */}
      <Header />

      {/* Navbar Section */}
      <Navbar />

      {/* Full Page Login Form */}
      <div className="flex-1 flex items-center justify-center bg-white p-8 rounded-lg shadow-lg w-full mx-auto mt-8">
        <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h1>

          <form onSubmit={handleSubmit} className="w-full">
            {/* Email Input */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-lg font-semibold text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full p-4 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg placeholder:text-lg"
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-lg font-semibold text-gray-600">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className="w-full p-4 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg placeholder:text-lg"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Login
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-lg text-gray-600">
              Don't have an account?{' '}
              <a href="/signup" className="text-blue-600 hover:underline">Sign up here</a>
            </p>
          </div>
        </div>
      </div>

      {/* Optional Footer */}
      <div className="bg-gray-800 text-white text-center py-4 mt-8">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Login;
