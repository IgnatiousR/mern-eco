// import { useState } from "react";
import { HiBars3BottomRight, HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi2";
import { Link } from "react-router";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layouts/CartDrawer";
import { useToggle } from "../../hooks/useToggle";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  // const [drawerOpen, setDrawerOpen] = useState(false);
  // const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  // const toggle = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
  //   setter((prev) => !prev);
  // };

  // const toggleNavDrawer = () => toggle(setNavDrawerOpen);
  // const toggleCartDrawer = () => toggle(setDrawerOpen);

  // const toggleNavDrawer = () => {
  //   setNavDrawerOpen(!navDrawerOpen);
  // };

  // const toggleCartDrawer = () => {
  //   setDrawerOpen(!drawerOpen);
  // };

  const { value: drawerOpen, toggle: toggleCartDrawer } = useToggle(false);
  const { value: navDrawerOpen, toggle: toggleNavDrawer } = useToggle(false);

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

          <button onClick={toggleNavDrawer} className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-zinc-700" />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* Mobile Nav */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/3 h-full bg-white shadow-lg transfrom transition-transform duration-300 z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4 ">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-6 w-6 text-zinc-600" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="space-y-4">
            <Link to={"#"} onClick={toggleNavDrawer} className="block text-zinc-600 hover:text-black">
              Men
            </Link>
            <Link to={"#"} onClick={toggleNavDrawer} className="block text-zinc-600 hover:text-black">
              Cate 2
            </Link>
            <Link to={"#"} onClick={toggleNavDrawer} className="block text-zinc-600 hover:text-black">
              Cate 3
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
