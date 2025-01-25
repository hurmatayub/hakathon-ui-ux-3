"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [profilePic, setProfilePic] = useState<string | null>("/default-profile.png"); // Default Profile Picture
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [phone, setPhone] = useState("+1234567890");
  const [isSaved, setIsSaved] = useState(false); // State to manage the save confirmation

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);


  useEffect(() => {
    
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    
    if (isDarkMode) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setProfilePic(fileReader.result as string);
      };
      fileReader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    // Simulate saving changes
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false); 
    }, 3000);
  };

  const handleChangePassword = () => {
    
    if (newPassword !== confirmPassword) {
      alert("New password and confirmation password do not match.");
    } else {
      alert("Password changed successfully!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    }
  };

  const handleSaveNotifications = () => {
    alert("Notification preferences saved!");
  };

  const tabs = [
    { id: "profile", name: "Profile Settings" },
    { id: "password", name: "Change Password" },
    { id: "notifications", name: "Notifications" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-5xl mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>

        
        <div className="flex justify-end mb-6">
          <label className="flex items-center cursor-pointer">
            <span className="mr-2 text-sm">Dark Mode</span>
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={() => setIsDarkMode(!isDarkMode)}
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
          </label>
        </div>

       
        <div className="flex border-b mb-6 dark:border-gray-600">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 font-medium ${
                activeTab === tab.id
                  ? "border-b-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

    
        {activeTab === "profile" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Profile Information</h2>

         
            <div className="flex items-center gap-6 mb-6">
              <div className="relative w-24 h-24">
                <Image
                  src={profilePic || "/default-profile.png"}
                  alt="Profile Picture"
                  className="rounded-full object-cover"
                  layout="fill"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                  Upload Profile Picture
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePicChange}
                  className="block w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border file:border-gray-300 dark:file:border-gray-500 file:text-gray-600 dark:file:text-gray-300 hover:file:bg-gray-100 dark:hover:file:bg-gray-700"
                />
              </div>
            </div>

   
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-400"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "password" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Change Password</h2>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-300 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-400"
                />
              </div>
            </div>

            <button
              onClick={handleChangePassword}
              className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition dark:bg-blue-400 dark:hover:bg-blue-500"
            >
              Change Password
            </button>
          </div>
        )}

        {activeTab === "notifications" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                checked={emailNotifications}
                onChange={() => setEmailNotifications(!emailNotifications)}
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-3 text-sm text-gray-600 dark:text-gray-300">Email Notifications</span>
            </div>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                checked={smsNotifications}
                onChange={() => setSmsNotifications(!smsNotifications)}
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-3 text-sm text-gray-600 dark:text-gray-300">SMS Notifications</span>
            </div>

            <button
              onClick={handleSaveNotifications}
              className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition dark:bg-blue-400 dark:hover:bg-blue-500"
            >
              Save Notification Preferences
            </button>
          </div>
        )}

        {/* Save Changes Button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSaveChanges}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition dark:bg-blue-400 dark:hover:bg-blue-500"
          >
            Save Changes
          </button>
        </div>
        {isSaved && (
          <div className="mt-4 text-center text-green-500 font-semibold">
            Changes have been saved!
          </div>
        )}
      </div>
    </div>
  );
}
