"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Topcars from './Topcars';
import Recantcars from './Recantcars';
import DashboardRental from './dashboardRental';
import Link from 'next/link';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [darkMode, setDarkMode] = useState(false);

  
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const getIconSource = (tabName: string) => {
    if (activeTab === tabName) {
      return `/icons/${tabName}-white.png`; 
    }
    return `/icons/${tabName}.png`; 
  };

  return (
    <div className="w-full h-[900px] bg-[#F6F7F9] dark:bg-[#1A1A1A] relative transition-all duration-300">
  <div className="hidden md:block w-[286px] h-[895px] bg-[#FFFFFF] dark:bg-[#2C2C2C] border border-[#F3F5F7] dark:border-[#444]">
        <div className="w-full h-auto border-b border-[#F3F5F7] dark:border-[#444] py-4">
          <div className="pl-4">
            <p className="text-[#94A7CB66] dark:text-[#A0A7B8] font-semibold text-xs">M A I N  M E N U</p>
          </div>
          <div className="space-y-4 mt-6">
            <div
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center gap-3 pl-2 py-4 mx-3 rounded-[10px] ${activeTab === 'dashboard' ? 'bg-[#3563E9]' : ''}`}
            >
              <div className="w-[24px] h-[24px]">
                <Image
                  src={getIconSource('home')}
                  alt="Dashboard"
                  width={24}
                  height={24}
                />
              </div>
              <p className={`${activeTab === 'dashboard' ? 'text-white' : 'text-[#90A3BF]'} font-medium text-base`}>Dashboard</p>
            </div>

            <div
              onClick={() => setActiveTab('carRent')}
              className={`flex items-center gap-3 pl-2 py-4 mx-3 rounded-[10px] ${activeTab === 'carRent' ? 'bg-[#3563E9]' : ''}`}
            >
              <div className="w-[24px] h-[24px]">
                <Image
                  src={getIconSource('cari')}
                  alt="Car Rent"
                  width={24}
                  height={24}
                />
              </div>
              <p className={`${activeTab === 'carRent' ? 'text-white' : 'text-[#90A3BF]'} font-medium text-base`}>Car Rent</p>
            </div>
            
            <div
              onClick={() => setActiveTab('insight')}
              className={`flex items-center gap-3 pl-2 py-4 mx-3 rounded-[10px] ${activeTab === 'insight' ? 'bg-[#3563E9]' : ''}`}
            >
              <div className="w-[24px] h-[24px]">
                <Image
                  src={getIconSource('insight')}
                  alt="Insight"
                  width={24}
                  height={24}
                />
              </div>
             
              <p className={`${activeTab === 'insight' ? 'text-white' : 'text-[#90A3BF]'} font-medium text-base`}>Insight</p>
            </div>
           

            <div
              onClick={() => setActiveTab('reimburse')}
              className={`flex items-center gap-3 pl-2 py-4 mx-3 rounded-[10px] ${activeTab === 'reimburse' ? 'bg-[#3563E9]' : ''}`}
            >
              <div className="w-[24px] h-[24px]">
                <Image
                  src={getIconSource('wallet')}
                  alt="Reimburse"
                  width={24}
                  height={24}
                />
              </div>
              <p className={`${activeTab === 'reimburse' ? 'text-white' : 'text-[#90A3BF]'} font-medium text-base`}>Reimburse</p>
            </div>

            <div
              onClick={() => setActiveTab('inbox')}
              className={`flex items-center gap-3 pl-2 py-4 mx-3 rounded-[10px] ${activeTab === 'inbox' ? 'bg-[#3563E9]' : ''}`}
            >
              <div className="w-[24px] h-[24px]">
                <Image
                  src={getIconSource('message')}
                  alt="Inbox"
                  width={24}
                  height={24}
                />
              </div>
              <p className={`${activeTab === 'inbox' ? 'text-white' : 'text-[#90A3BF]'} font-medium text-base`}>Inbox</p>
            </div>

            <div
              onClick={() => setActiveTab('calendar')}
              className={`flex items-center gap-3 pl-2 py-4 mx-3 rounded-[10px] ${activeTab === 'calendar' ? 'bg-[#3563E9]' : ''}`}
            >
              <div className="w-[24px] h-[24px]">
                <Image
                  src={getIconSource('calendar')}
                  alt="Calendar"
                  width={24}
                  height={24}
                />
              </div>
              <p className={`${activeTab === 'calendar' ? 'text-white' : 'text-[#90A3BF]'} font-medium text-base`}>Calendar</p>
            </div>
          </div>
        </div>

        <div className="w-full h-auto gap-0 border-b border-[#F3F5F7] dark:border-[#444] py-4 mt-9">
          <div className="pl-4">
            <p className="text-[#94A7CB66] dark:text-[#A0A7B8] font-semibold text-xs">P R E F E R E N C E S</p>
          </div>
          <div className="space-y-4 mt-6">
            <div
              onClick={() => setActiveTab('settings')}
              className={`flex items-center gap-3 pl-2 py-4 mx-3 rounded-[10px] ${activeTab === 'settings' ? 'bg-[#3563E9]' : ''}`}
            >
              <div className="w-[24px] h-[24px]">
                <Image
                  src={getIconSource('setting')}
                  alt="Settings"
                  width={24}
                  height={24}
                />
              </div>
              <p className={`${activeTab === 'settings' ? 'text-white' : 'text-[#90A3BF]'} font-medium text-base`}>Settings</p>
            </div>

            <div
              onClick={() => setActiveTab('help')}
              className={`flex items-center gap-3 pl-2 py-4 mx-3 rounded-[10px] ${activeTab === 'help' ? 'bg-[#3563E9]' : ''}`}
            >
              <div className="w-[24px] h-[24px]">
                <Image
                  src={getIconSource('info-circle')}
                  alt="Help"
                  width={24}
                  height={24}
                />
              </div>
              <p className={`${activeTab === 'help' ? 'text-white' : 'text-[#90A3BF]'} font-medium text-base`}>Help & Center</p>
            </div>

            <div
              onClick={() => setDarkMode(!darkMode)}
              className={`flex items-center gap-3 pl-2 py-4 mx-3 rounded-[10px] ${darkMode ? 'bg-[#3563E9]' : ''}`}
            >
              <div className="w-[24px] h-[24px]">
                <Image
                  src={getIconSource('briefcase')}
                  alt="Dark Mode"
                  width={24}
                  height={24}
                />
              </div>
              <p className={`${darkMode ? 'text-white' : 'text-[#90A3BF]'} font-medium text-base`}>Dark Mode</p>
              <Image
                src="/icons/toggle.png"
                alt="Toggle Dark Mode"
                width={68}
                height={34}
              />
            </div>
          </div>
        </div>

        <div className="w-full h-auto py-4 mt-20">
          <div
            onClick={() => setActiveTab('logout')}
            className={`flex items-center gap-3 pl-2 py-4 mx-3 rounded-[10px] ${activeTab === 'logout' ? 'bg-[#3563E9]' : ''}`}
          >
            <div className="w-[24px] h-[24px]">
              <Image
                src={getIconSource('logout')}
                alt="Log Out"
                width={24}
                height={24}
              />
            </div>
            <p className={`${activeTab === 'logout' ? 'text-white' : 'text-[#90A3BF]'} font-medium text-base`}>Log Out</p>
          </div>
        </div>
      </div>
      <DashboardRental />
      <Topcars />
      <Recantcars />
    </div>
  );
}


