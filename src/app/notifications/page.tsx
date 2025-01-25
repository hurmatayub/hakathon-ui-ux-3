"use client";

import { useState, useEffect } from "react";

type Notification = {
  id: string;
  message: string;
  date: string;
  type: "info" | "success" | "warning" | "error";
  category?: string;
  isRead: boolean;
};

export default function NotificationPage() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    const fetchedNotifications: Notification[] = [
      {
        id: "1",
        message: "Your booking for the car has been confirmed!",
        date: "2025-01-20 10:30 AM",
        type: "success",
        isRead: false,
      },
      {
        id: "2",
        message: "The car you requested is available for booking.",
        date: "2025-01-19 05:00 PM",
        type: "info",
        isRead: false,
      },
      {
        id: "3",
        message: "There's a special offer on car rentals for this week!",
        date: "2025-01-18 08:00 AM",
        type: "warning",
        category: "Special Promotions",
        isRead: false,
      },
      {
        id: "4",
        message: "New luxury cars available for rent. Check them out!",
        date: "2025-01-17 03:45 PM",
        type: "info",
        category: "New Cars",
        isRead: false,
      },
      {
        id: "5",
        message: "Get 20% off on your next rental booking.",
        date: "2025-01-16 02:00 PM",
        type: "success",
        category: "Discounts",
        isRead: false,
      },
    ];

    setNotifications(fetchedNotifications);
  }, []);

  const getNotificationStyle = (type: "info" | "success" | "warning" | "error") => {
    switch (type) {
      case "info":
        return "bg-blue-100 border-blue-500 text-blue-800";
      case "success":
        return "bg-green-100 border-green-500 text-green-800";
      case "warning":
        return "bg-yellow-100 border-yellow-500 text-yellow-800";
      case "error":
        return "bg-red-100 border-red-500 text-red-800";
      default:
        return "";
    }
  };

  const handleMarkAsRead = (id: string) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification
      )
    );

    setTimeout(() => {
      setNotifications((prevNotifications) =>
        prevNotifications.filter((notification) => notification.id !== id)
      );
    }, 2000); 
  };

  const filteredNotifications = selectedCategory === "All"
    ? notifications
    : notifications.filter(notification => notification.category === selectedCategory);

  return (
    <>
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Notifications</h1>

      <div className="mb-4">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`mr-4 px-4 py-2 rounded-md ${selectedCategory === "All" ? "bg-[#3563E9]  text-white" : "bg-gray-200 text-gray-800"}`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedCategory("Discounts")}
          className={`mr-4 px-4 py-2 rounded-md ${selectedCategory === "Discounts" ? "bg-[#3563E9]  text-white" : "bg-gray-200 text-gray-800"}`}
        >
          Discounts
        </button>
        <button
          onClick={() => setSelectedCategory("New Cars")}
          className={`mr-4 px-4 py-2 rounded-md ${selectedCategory === "New Cars" ? "bg-[#3563E9]  text-white" : "bg-gray-200 text-gray-800"}`}
        >
          New Cars
        </button>
        <button
          onClick={() => setSelectedCategory("Special Promotions")}
          className={`mr-4 px-4 py-2 rounded-md ${selectedCategory === "Special Promotions" ? "bg-[#3563E9]  text-white" : "bg-gray-200 text-gray-800"}`}
        >
          Special Promotions
        </button>
      </div>

      <div className="space-y-4">
        {filteredNotifications.map((notification) => (
          !notification.isRead && (
            <div
              key={notification.id}
              className={`flex justify-between items-center p-4 rounded-lg border-l-4 ${getNotificationStyle(
                notification.type
              )}`}
            >
              <div>
                <p className="font-semibold">{notification.message}</p>
                <p className="text-sm text-gray-500">{notification.date}</p>
                {notification.category && (
                  <p className="mt-2 text-sm text-gray-600">Category: {notification.category}</p>
                )}
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleMarkAsRead(notification.id)}
                  className="text-gray-600 hover:text-gray-900 mr-4"
                >
                  Mark as Read
                </button>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
    </>
  );
}
