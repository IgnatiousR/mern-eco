import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";
import { useNavigate } from "react-router";

const CartDrawer = ({
  drawerOpen,
  toggleCartDrawer,
}: {
  drawerOpen: boolean;
  toggleCartDrawer: () => void;
}) => {
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/checkout");
  };
  // const [drawerOpen, setDrawerOpen] = useState(false);

  // const toggleCartDrawer = () => {
  //   setDrawerOpen(!drawerOpen);
  // };
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-120 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* close button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <IoMdClose className="h-6 w-6 text-zinc-600" />
        </button>
      </div>

      {/* Cart contents with scrollable area */}
      <div className="grow p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        <CartContents />
      </div>
      {/* Checkout Button */}
      <div className="p-4 bg-white sticky bottom-0">
        <button
          onClick={handleCheckout}
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-zinc-800 transition"
        >
          Checkout
        </button>
        <p className="text-sm tracking-tighter text-zinc-500 mt-2 text-center">
          Shipping, Taxes and discount are calculated at checkout.
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
