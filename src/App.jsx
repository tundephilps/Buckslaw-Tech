import React, { useEffect, useState } from "react";
import "./App.css";
import Homepage from "./Pages/Homepage";
import Loading from "./components/Loading";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowComponent(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <>
      <Router>
        {!showComponent && (
          <div>
            <div className="h-screen">
              <div className="flex items-center justify-center h-screen">
                <Loading />{" "}
              </div>
            </div>
          </div>
        )}
        {showComponent && <Homepage />}
      </Router>
    </>
  );
}

export default App;
