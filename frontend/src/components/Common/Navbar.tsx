import { useState } from "react";
import { HiBars3BottomRight, HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi2";
import { Link } from "react-router";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layouts/CartDrawer";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <div>
          <Link to="/" className="text-2xl font-medium">
            MStore
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link to={"#"} className="text-zinc-700 hover:text-black text-sm font-medium uppercase">
            Men
          </Link>
          <Link to={"#"} className="text-zinc-700 hover:text-black text-sm font-medium uppercase">
            Women
          </Link>
          <Link to={"#"} className="text-zinc-700 hover:text-black text-sm font-medium uppercase">
            Top Wear
          </Link>
          <Link to={"#"} className="text-zinc-700 hover:text-black text-sm font-medium uppercase">
            Bottom Wear
          </Link>
        </div>

        {/* Right - Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-zinc-700" />
          </Link>
          <button onClick={toggleCartDrawer} className="relative hover:text-black">
            <HiOutlineShoppingBag className="h-6 w-6 text-zinc-700" />
            <span className="absolute bg-rabit-red -top-2 -right-2 text-white text-xs rounded-full px-1.5 py-0.5">
              5
            </span>
          </button>

          <div className="overflow-hidden">
            <SearchBar />
          </div>

          <button className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-zinc-700" />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
    </>
  );
};

export default Navbar;
