import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-300 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-2">
        <div>
          <h3 className="text-lg text-zinc-800 mb-4">Newsletter</h3>
          <p className="text-zinc-500 mb-4">
            Be the first to hear about new products, exclusive events and online offers.
          </p>
          <p className="font-medium text-sm text-zinc-600 mb-6">Sign up and get 5% off your first order.</p>

          {/* Newsletter form */}
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full text-sm border-t border-l border-b border-zinc-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-zinc-500 transition-all"
              required
            />

            <button
              type="submit"
              className="bg-black text-white px-6 py-4 rounded-r-md hover:bg-zinc-800 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Shop links */}
        <div>
          <h3 className="text-lg text-zinc-800 mb-4">Shop</h3>
          <ul className="space-y-2 text-zinc-700">
            <li>
              <Link to="#" className="hover:text-zinc-500 transition-colors">
                Category 1
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-zinc-500 transition-colors">
                Category 2
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-zinc-500 transition-colors">
                Category 3
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-zinc-500 transition-colors">
                Category 4
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
