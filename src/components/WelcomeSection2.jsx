import React from "react";

const WelcomeSection2 = () => {
  return (
    <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">
        Welcome to the SafeHaven Reporting Dashboard
      </h1>
      <p className="text-lg text-blue-700">
        Use this platform to report missing children, track submitted cases, and stay informed with real-time notifications.
      </p>
      <div className="mt-6 flex justify-center space-x-4">
        <button
          className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition duration-300"
          onClick={() => {
            window.scrollTo({
              top: document.getElementById("report-section").offsetTop,
              behavior: "smooth",
            });
          }}
        >
          Report Missing Child
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          onClick={() => {
            window.scrollTo({
              top: document.getElementById("notifications-section").offsetTop,
              behavior: "smooth",
            });
          }}
        >
          View Notifications
        </button>
      </div>
    </div>
  );
};

export default WelcomeSection2;
