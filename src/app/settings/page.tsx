"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Sidebar from './sidebar';

const Settings = () => {
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [isAvailable, setIsAvailable] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <>
    <Sidebar />
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900' : ''} relative lg:top-[-900px] top-[-900px] lg:right-[-60px]`}>

      <div className={`max-w-4xl mx-auto p-8 rounded-xl  shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        {/* Dark Mode Toggle */}
        <div className="flex justify-between items-center mb-8">
          <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Settings</h1>
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg ${darkMode ? 'bg-yellow-400 text-gray-800' : 'bg-gray-800 text-white'}`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

     
        <div className={`bg-gray-100 p-6 rounded-xl shadow-md mb-8 ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-50'}`}>
          <h2 className="text-2xl font-semibold mb-6">Account Settings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           
            <div>
              <label className={`text-gray-600 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Username</label>
              <input
                type="text"
                className={`w-full p-4 bg-gray-50 rounded-lg shadow-sm border focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-600 text-white' : 'bg-white'}`}
                placeholder="Enter your username"
              />
            </div>

           
            <div>
              <label className={`text-gray-600 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Email Address</label>
              <input
                type="email"
                className={`w-full p-4 bg-gray-50 rounded-lg shadow-sm border focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-600 text-white' : 'bg-white'}`}
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className={`text-gray-600 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Phone Number</label>
              <input
                type="text"
                className={`w-full p-4 bg-gray-50 rounded-lg shadow-sm border focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-600 text-white' : 'bg-white'}`}
                placeholder="Enter your phone number"
              />
            </div>

          
            <div>
              <label className={`text-gray-600 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Profile Picture</label>
              <input
                type="file"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setProfilePic(URL.createObjectURL(e.target.files[0]));
                  }
                }}
                className={`w-full p-4 bg-gray-50 rounded-lg shadow-sm border ${darkMode ? 'bg-gray-600 text-white' : 'bg-white'}`}
              />
             
              {profilePic && (
                <div className="mt-4">
                  <Image
                    src={profilePic}
                    alt="Profile Preview"
                    width={128} 
                    height={128} 
                    className="object-cover rounded-full"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

      
        <div className={`bg-gray-100 p-6 rounded-xl shadow-md mb-8 ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-50'}`}>
          <h2 className="text-2xl font-semibold mb-6">Car Management</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           
            <div>
              <label className={`text-gray-600 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Car Model</label>
              <input
                type="text"
                className={`w-full p-4 bg-gray-50 rounded-lg shadow-sm border focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-600 text-white' : 'bg-white'}`}
                placeholder="Enter car model"
              />
            </div>

            <div>
              <label className={`text-gray-600 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Rent Per Day</label>
              <input
                type="number"
                className={`w-full p-4 bg-gray-50 rounded-lg shadow-sm border focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-600 text-white' : 'bg-white'}`}
                placeholder="Enter rent per day"
              />
            </div>

           
            <div>
              <label className={`text-gray-600 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Car Available for Rent</label>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={isAvailable}
                  onChange={() => setIsAvailable(!isAvailable)}
                  className="rounded-full border-2 text-blue-500 transition duration-200 ease-in-out mr-3"
                />
                <span className={`text-gray-600 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{isAvailable ? 'Available' : 'Not Available'}</span>
              </div>
            </div>
          </div>
        </div>

     
        <div className={`bg-gray-100 p-6 rounded-xl shadow-md mb-8 ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-50'}`}>
          <h2 className="text-2xl font-semibold mb-6">Notifications</h2>

          <div className="flex items-center space-x-4 mb-4">
            <input type="checkbox" className="rounded-full text-blue-500 transition duration-200 ease-in-out" />
            <label className={`text-gray-600 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Email Notifications</label>
          </div>
          <div className="flex items-center space-x-4 mb-4">
            <input type="checkbox" className="rounded-full text-blue-500 transition duration-200 ease-in-out" />
            <label className={`text-gray-600 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>SMS Notifications</label>
          </div>
          <div className="flex items-center space-x-4 mb-4">
            <input type="checkbox" className="rounded-full text-blue-500 transition duration-200 ease-in-out" />
            <label className={`text-gray-600 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Push Notifications</label>
          </div>
        </div>

       
        <div className="flex justify-end space-x-6 mt-8">
       
          <button
            className={`bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-10 rounded-lg shadow-lg hover:from-blue-400 hover:to-blue-500 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300`}
          >
            Save Changes
          </button>

          
          <button
            className={`bg-white text-gray-700 py-3 px-10 rounded-lg shadow-lg border border-gray-300 hover:bg-gray-100 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-200`}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Settings;
