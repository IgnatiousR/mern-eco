import Hero from "../components/Layouts/Hero";
import NewArrivals from "../components/Products/NewArrivals";
import ProductCollectionSection from "../components/Products/ProductCollectionSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <ProductCollectionSection />
      <NewArrivals />
    </div>
  );
};

export default Home;
