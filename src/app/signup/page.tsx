'use client';

import React, { useState } from 'react';
import Header from '@/components/Header'; // Import Header component
import Navbar from '@/components/Navbar'; // Import Navbar component
import Swal from 'sweetalert2'; // Import SweetAlert2

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    dateOfBirth: '',
    password: '',
    retypePassword: '',
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleRetypePasswordVisibility = () => {
    setShowRetypePassword(!showRetypePassword);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Show a success message using SweetAlert2
    Swal.fire({
      title: 'Signup Successful!',
      text: 'Your account has been created.',
      icon: 'success',
      confirmButtonText: 'OK',
    }).then(() => {
      // Clear the form data after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        dateOfBirth: '',
        password: '',
        retypePassword: '',
      });
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header Section */}
      <Header />

      {/* Navbar Section */}
      <Navbar />

      {/* Full Page Signup Form */}
      <div className="flex-1 flex items-center justify-center bg-white p-8 rounded-lg shadow-lg w-full mx-auto mt-8">
        <div className="w-full lg:w-3/4 xl:w-2/3 2xl:w-1/2">
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Sign Up</h1>

          <form onSubmit={handleSubmit} className="w-full">
            {/* First Name and Last Name Input (Side by Side) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-lg font-semibold text-gray-600">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your first name"
                  className="w-full p-4 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg placeholder:text-lg"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-lg font-semibold text-gray-600">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your last name"
                  className="w-full p-4 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg placeholder:text-lg"
                />
              </div>
            </div>

            {/* Email and Mobile Number Input (Side by Side) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
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
              <div>
                <label htmlFor="mobileNumber" className="block text-lg font-semibold text-gray-600">Mobile Number</label>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                  placeholder="Enter your mobile number"
                  className="w-full p-4 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg placeholder:text-lg"
                />
              </div>
            </div>

            {/* Date of Birth Input */}
            <div className="mb-6">
              <label htmlFor="dateOfBirth" className="block text-lg font-semibold text-gray-600">Date of Birth</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
                className="w-1/3 p-4 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg placeholder:text-lg"
              />
            </div>

            {/* Password and Retype Password Input (Side by Side) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <label htmlFor="password" className="block text-lg font-semibold text-gray-600">Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter your password"
                  className="w-full p-4 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg placeholder:text-lg"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>

              <div className="relative">
                <label htmlFor="retypePassword" className="block text-lg font-semibold text-gray-600">Retype Password</label>
                <input
                  type={showRetypePassword ? 'text' : 'password'}
                  id="retypePassword"
                  name="retypePassword"
                  value={formData.retypePassword}
                  onChange={handleChange}
                  required
                  placeholder="Retype your password"
                  className="w-full p-4 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg placeholder:text-lg"
                />
                <button
                  type="button"
                  onClick={toggleRetypePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showRetypePassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="w-1/3 bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Sign Up
              </button>
            </div>

          </form>

          <div className="mt-6 text-center">
            <p className="text-lg text-gray-600">
              Already have an account?{' '}
              <a href="/login" className="text-blue-600 hover:underline">Login here</a>
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

export default Signup;
