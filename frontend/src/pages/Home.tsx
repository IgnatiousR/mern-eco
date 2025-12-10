import Hero from "../components/Layouts/Hero";
import NewArrivals from "../components/Products/NewArrivals";
import ProductCollectionSection from "../components/Products/ProductCollectionSection";
import ProductDetails from "../components/Products/ProductDetails";

const Home = () => {
  return (
    <div>
      <Hero />
      <ProductCollectionSection />
      <NewArrivals />

      {/* Best Seller */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      <ProductDetails />
    </div>
  );
};

export default Home;
