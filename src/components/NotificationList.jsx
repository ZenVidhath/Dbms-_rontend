import React, { useState } from "react";
import { motion } from "framer-motion";

const NotificationList = () => {
  // Mock notification data for preview purposes
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Child reported missing in your area.", read_status: false },
    { id: 2, message: "Agency has updated a case you're following.", read_status: true },
    { id: 3, message: "A new alert has been issued for a missing child.", read_status: false },
  ]);

  // Simulate marking a notification as read
  const markAsRead = (notificationId) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === notificationId
          ? { ...notification, read_status: true }
          : notification
      )
    );
  };

  return (
    <div className="p-6 max-w-3x2 mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Your Notifications</h1>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            className={`p-4 border rounded-lg cursor-pointer ${
              notification.read_status
                ? "bg-gray-200 border-gray-400"
                : "bg-blue-100 border-blue-500"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => markAsRead(notification.id)}
          >
            <h2 className="text-lg font-semibold text-gray-800">{notification.message}</h2>
            <p className="text-sm text-gray-600 mt-2">
              Status:{" "}
              <span className={notification.read_status ? "text-green-600" : "text-red-600"}>
                {notification.read_status ? "Read" : "Unread"}
              </span>
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NotificationList;
