import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router";

const NewArrivals = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
      price: "10.99",
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
      price: "20.99",
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
      price: "2.99",
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
      price: "7.99",
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
      price: "120.99",
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
      price: "40.99",
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
      price: "80.99",
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
      price: "87.99",
    },
  ];

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsDragging(true);
    if (scrollRef.current == null) return;
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;
    if (!scrollRef.current) return;
    const x = e.pageX - scrollRef.current?.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const scroll = (direction: "left" | "right") => {
    const scrollAmount = direction === "left" ? -300 : 300;
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  //Update Scroll Buttons State
  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScrollable = container.scrollWidth > leftScroll + container.clientWidth;
      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollable);
    }

    console.log({
      scrollLeft: container?.scrollLeft,
      clientWidth: container?.clientWidth,
      containerScrollWidth: container?.scrollWidth,
      offsetLeft: scrollRef.current?.offsetLeft,
    });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      return () => container.removeEventListener("scroll", updateScrollButtons);
    }
  }, []);

  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-zinc-600 mb-8">
          Check our latest products, freshly arrived to our store.
        </p>

        {/* Scroll Buttons */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded border ${
              canScrollLeft ? "bg-white text-black" : "bg-zinc-100 text-gray-400 cursor-not-allowed"
            } border-zinc-300`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 rounded border ${
              canScrollRight
                ? "bg-white text-black"
                : "bg-zinc-100 text-gray-400 cursor-not-allowed"
            } border-zinc-300`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Scrollable content */}
      <div
        ref={scrollRef}
        className={`container mx-auto scrollbar overflow-x-scroll flex space-x-6 
      relative ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      } scrollbar-track-zinc-200 crollbar-track-rounded-full scrollbar-thumb-zinc-700`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {newArrivals.map((product) => (
          <div key={product._id} className="min-w-full sm:min-w-[50%] lg:min-w-[30%] relative">
            <img
              src={product.images[0].url}
              alt={product.images[0]?.altText || product.name}
              className="w-full h-[500px] object-cover rounded-lg"
              draggable={false}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
              <Link to={`/products/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">{product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
