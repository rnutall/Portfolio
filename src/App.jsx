import { useState } from "react";
import "./App.css";
import NavTabs from "./components/NavTabs/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contacts";
import PortfolioContainer from "./components/pages/PortfolioContacts";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <PortfolioContainer />;
    }

    return <Contact />;
  };
  return (
    <div className="App">
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;
