import React from "react";
import Sidebar from "../components/Sidebar";

const UserDashboard = () => {
  console.log("UserDashboard rendered"); // Debugging log
  return (
    <div className="flex">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Placeholder */}
      <div className="flex-1 ml-64 p-6">
        <h1 className="text-3xl font-bold">User Dashboard</h1>
        <p className="mt-4">
          This is the main content area. Add your specific sections here.
        </p>
      </div>
    </div>
  );
};

export default UserDashboard;
