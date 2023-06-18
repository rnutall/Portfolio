import { useState } from "react";
import "./App.css";
import NavTabs from "./components/NavTabs/NavTabs";
import Homepage from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import PortfolioContainer from "./components/pages/Portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Homepage />;
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
      <Header />
      <Footer />
    </div>
  );
  // return (
  //   <div className="App">
  //     <About currentPage={currentPage} handlePageChange={handlePageChange} />
  //     <main>{renderPage()}</main>
  //   </div>
  // );
};


export default App;
