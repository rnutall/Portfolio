import NavTabs from "../NavTabs/NavTabs";

export default function Header({ currentPage, handlePageChange}) {
  return (
  <header>
    <h1>Rodney</h1>
    <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
  </header>
  );
}
