import React, { useState } from "react";
import './style.css';
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Home from "./Home";
import Database from "./Database";
import WorksheetGen from "./WorksheetGen";
import ClassList from "./ClassList";
import PersonalisedWorksheets from "./PersonalisedWorksheets";

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'database':
        return <Database setCurrentPage={setCurrentPage} />;
      case 'worksheetGen':
        return <WorksheetGen setCurrentPage={setCurrentPage} />;
      case 'classList':
        return <ClassList setCurrentPage={setCurrentPage} />;
      case 'personalisedWorksheets':
        return <PersonalisedWorksheets setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <>
      <ResponsiveAppBar setCurrentPage={setCurrentPage} />
      {renderPage()}
    </>
  );
}

export default App;