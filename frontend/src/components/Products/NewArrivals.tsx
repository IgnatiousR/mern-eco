import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const NewArrivals = () => {
  const newArrivals = [
    {
      _id: "1",
      name: "Prod 1",
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "Prod 1",
        },
      ],
    },
    {
      _id: "2",
      name: "Prod 2",
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "Prod 2",
        },
      ],
    },
    {
      _id: "3",
      name: "Prod 3",
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "Prod 3",
        },
      ],
    },
    {
      _id: "4",
      name: "Prod 4",
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "Prod 4",
        },
      ],
    },
    {
      _id: "5",
      name: "Prod 5",
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "Prod 5",
        },
      ],
    },
    {
      _id: "6",
      name: "Prod 6",
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "Prod 6",
        },
      ],
    },
    {
      _id: "7",
      name: "Prod 7",
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
          altText: "Prod 7",
        },
      ],
    },
    {
      _id: "8",
      name: "Prod 8",
      images: [
        {
          url: "https://picsum.photos/500/500?random=8",
          altText: "Prod 8",
        },
      ],
    },
  ];
  return (
    <section>
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-zinc-600 mb-8">
          Check our latest products, freshly arrived to our store.
        </p>

        {/* Scroll Buttons */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button className="p-2 rounded border border-zinc-300 bg-white text-black">
            <FiChevronLeft className="text-2xl" />
          </button>
          <button className="p-2 rounded border border-zinc-300 bg-white text-black">
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Scrollable content */}
      <div
        className="container mx-auto scrollbar overflow-x-scroll flex space-x-6 
      relative scrollbar-track-zinc-200 crollbar-track-rounded-full scrollbar-thumb-sky-700"
      >
        {newArrivals.map((product) => (
          <div key={product._id}>
            <img src={product.images[0].url} alt={product.images[0]?.altText || product.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
