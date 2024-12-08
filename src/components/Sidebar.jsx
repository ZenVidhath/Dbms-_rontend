import React from "react";
import { motion } from "framer-motion";

const Sidebar = () => {
  const navItems = [
    { id: "welcome", label: "Dashboard" },
    { id: "report-missing-child", label: "Report Missing Child" },
    { id: "submitted-reports", label: "Submitted Reports" },
    { id: "notifications", label: "Notifications" },
    { id: "search-missing-children", label: "Search Missing Children" },
    { id: "help-resources", label: "Help & Resources" },
    { id: "account-management", label: "Account Management" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className="w-64 bg-purple-800 text-white h-screen flex flex-col fixed"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-center p-4">Navigation</h2>
      <ul className="space-y-4 p-4">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer hover:bg-purple-600 p-2 rounded-md"
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Sidebar;
