import React from "react";
import Sidebar from "../components/Sidebar";
import WelcomeSection2 from "../components/WelcomeSection2";
import ReportMissingChild from "../components/ReportMissingChild";
import SubmittedReports from "../components/SubmittedReports";
import NotificationList from "../components/NotificationList";

const UserDashboard = () => {
  console.log("UserDashboard rendered"); // Debugging log
  return (
    <div className="flex">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Placeholder */}
      <div className="flex-1 ml-64 p-6">
        <WelcomeSection2/>
        <ReportMissingChild/>
        <SubmittedReports/>
        <NotificationList/>
      </div>
    </div>
  );
};

export default UserDashboard;
