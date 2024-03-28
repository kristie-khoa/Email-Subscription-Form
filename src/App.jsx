import viteLogo from "/vite.svg";
import "./App.css";
import SignUpCard from "./SignUpCard";
import ConfirmationCard from "./ConfirmationCard";
import React, { useState, useEffect } from "react";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const togglePage = () => {
    setIsSubmitted(!isSubmitted);
  };

  return (
    <div className="App">
      {!isSubmitted ? (
        <SignUpCard togglePage={togglePage} />
      ) : (
        <ConfirmationCard togglePage={togglePage} />
      )}
    </div>
  );
}

export default App;
