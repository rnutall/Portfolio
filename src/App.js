import { useState } from "react";
import "./App.css";
import NavTabs from "./components/NavTabs/NavTabs";
import Home from "./components/pages/Home/home";
import About from "./components/pages/About/about";
import Contact from "./components/pages/Contact/contact";
import PortfolioContainer from "./components/pages/PortfolioContainer/PortfolioContacts";
import footer from "./components/pages/footer";
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
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Portfolio") {
      return <PortfolioContainer />;
    }
  };
  return (
    <div className="App">
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>{renderPage()}</main>
    </div>
  );
  return (
    <div className="App">
      <About currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>{renderPage()}</main>
    </div>
  );
};


export default App;
