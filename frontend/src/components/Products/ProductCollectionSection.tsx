import { Link } from "react-router";
// import menCollectionImage from "../../assets/mens-collection.webp";
// import womenCollectionImage from "../../assets/womens-collection.webp";

const ProductCollectionSection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        <div className="relative flex-1">
          <img
            // src={womenCollectionImage}
            src={"https://picsum.photos/1000/1500"}
            alt="women collection image"
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-white/90 p-4">
            <h2 className="text-2xl font-bold text-zinc-900 mb-3">Category 1</h2>
            <Link to={"/collections/all?gender=women"} className="text-zinc-900 underline">
              Shop Now
            </Link>
          </div>
        </div>

        <div className="relative flex-1">
          <img
            // src={menCollectionImage}
            src={"https://picsum.photos/1080/1246"}
            alt="men collection image"
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-white/90 p-4">
            <h2 className="text-2xl font-bold text-zinc-900 mb-3">Category 2</h2>
            <Link to={"/collections/all?gender=men"} className="text-zinc-900 underline">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCollectionSection;
