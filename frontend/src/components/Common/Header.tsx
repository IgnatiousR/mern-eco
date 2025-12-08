import Topbar from "../Layouts/Topbar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="border-b border-zinc-200 bg-zinc-100">
      <Topbar />
      <Navbar />
    </header>
  );
};

export default Header;
