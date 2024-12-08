// Import React and the LandingPage component
import React from "react";
import LandingPage from "./pages/LandingPage";

// Main App Component
function App() {
  return (
    <div className="App">
      {/* Rendering LandingPage which includes Navbar and Carousel */}
      <LandingPage />
    </div>
  );
}

export default App;
