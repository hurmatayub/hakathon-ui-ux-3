"use client"
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Sidenav from './sideNav';


interface Subtopic {
  title: string;
  description: string;
}

interface Topic {
  id: number;
  title: string;
  details: string;
  subtopics: Subtopic[];
}

const HelpCenter = () => {
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const topics: Topic[] = [
    { 
      id: 1, 
      title: 'Booking & Reservations', 
      details: 'Learn how to make, modify, and cancel a reservation easily.', 
      subtopics: [
        { title: 'Making a Reservation', description: 'Steps to book a car online.' },
        { title: 'Modifying Reservations', description: 'How to change dates or pick-up locations.' },
        { title: 'Canceling Reservations', description: 'Instructions on canceling a booking.' }
      ]
    },
    { 
      id: 2, 
      title: 'Pricing & Payments', 
      details: 'Understand pricing structure, payment methods, and discounts available.', 
      subtopics: [
        { title: 'Pricing Structure', description: 'Overview of car rental prices and options.' },
        { title: 'Payment Methods', description: 'Accepted payment methods for booking a car.' },
        { title: 'Discounts & Offers', description: 'How to use promo codes and discounts.' }
      ]
    },
    { 
      id: 3, 
      title: 'Car Policies', 
      details: 'Check out our policies regarding car rentals, insurance, and more.', 
      subtopics: [
        { title: 'Insurance Options', description: 'Details on insurance coverage for rentals.' },
        { title: 'Fuel Policy', description: 'Our fuel policy for rentals.' },
        { title: 'Age Restrictions', description: 'Age requirements for renting a car.' }
      ]
    },
    { 
      id: 4, 
      title: 'Account Management', 
      details: 'Manage your account settings, privacy preferences, and contact information.', 
      subtopics: [
        { title: 'Profile Settings', description: 'How to update your contact details.' },
        { title: 'Password Management', description: 'Steps to change your account password.' },
        { title: 'Privacy Settings', description: 'Manage your privacy preferences and data.' }
      ]
    },
    { 
      id: 5, 
      title: 'Troubleshooting & FAQs', 
      details: 'Get answers to the most frequently asked questions and troubleshooting tips.', 
      subtopics: [
        { title: 'Booking Errors', description: 'What to do if you experience issues during booking.' },
        { title: 'Payment Issues', description: 'Solutions for failed or pending payments.' },
        { title: 'Car Availability', description: 'How to check car availability and waitlists.' }
      ]
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(
      'your_service_id', 
      'your_template_id', 
      templateParams,
      'your_user_id' 
    )
    .then((response) => {
      console.log('Success:', response);
    }, (error) => {
      console.error('Error:', error);
    });

    setIsModalOpen(false);
  };

  const renderSubtopics = (subtopics: Subtopic[]) => {
    return subtopics.map((subtopic, index) => (
      <div key={index} className=" p-4 rounded-lg mb-4 shadow-md">
        <h4 className="text-2xl font-semibold text-gray-800">{subtopic.title}</h4>
        <p className="text-lg text-gray-700">{subtopic.description}</p>
      </div>
    ));
  };

  const renderTopicDetails = (topicId: number) => {
    const topic = topics.find((t) => t.id === topicId);
    if (topic) {
      return (
        <div>
          <h3 className="text-3xl font-semibold text-gray-900 mb-6">Topic Details:</h3>
          <p className="text-lg text-gray-700">{topic.details}</p>
          {renderSubtopics(topic.subtopics)}
        </div>
      );
    }
    return null;
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    
    <div className=" text-gray-900">
    <Sidenav />
      <div className="relative min-h-screen flex items-center justify-center py-12 lg:top-[-990px] top-[-850px] lg:right-[-60px] right-[-60]">
        <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-3xl">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-5xl font-extrabold text-center tracking-tight">
              Help & Support Center
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {topics.map((topic) => (
              <div
                key={topic.id}
                className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 rounded-xl p-8 cursor-pointer transform hover:scale-105 hover:rotate-2 transition-all duration-300 ease-in-out shadow-xl hover:shadow-2xl"
                onClick={() => setSelectedTopic(topic.id)}
              >
                <h2 className="text-3xl font-semibold text-white">{topic.title}</h2>
              </div>
            ))}
          </div>

          {selectedTopic && (
            <div className="bg-gray-50 p-8 rounded-2xl shadow-xl mt-8">
              {renderTopicDetails(selectedTopic)}
              <div className="mt-8 flex justify-between items-center space-x-4">
                <button
                  className="px-6 py-3 bg-gray-800 text-white rounded-full text-lg font-semibold hover:bg-gray-900 transition duration-300 ease-in-out"
                  onClick={() => setSelectedTopic(null)}
                >
                  Close
                </button>
                <button
                  className="px-6 py-3 bg-indigo-600 text-white rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300 ease-in-out"
                  onClick={openModal}
                >
                  Get More Help
                </button>
              </div>
            </div>
          )}

        
          {isModalOpen && (
            <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
                <h2 className="text-2xl font-semibold text-center mb-6">Contact Support</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="text-lg text-gray-700">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-3 mt-2 bg-gray-100 border border-gray-300 rounded-lg"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="text-lg text-gray-700">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 mt-2 bg-gray-100 border border-gray-300 rounded-lg"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="text-lg text-gray-700">Your Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full p-3 mt-2 bg-gray-100 border border-gray-300 rounded-lg"
                      rows={4}
                      placeholder="Describe your issue or question"
                    />
                  </div>
                  <div className="flex justify-between">
                    <button
                      type="button"
                      className="px-6 py-3 bg-gray-800 text-white rounded-full"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-indigo-600 text-white rounded-full"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default HelpCenter;



