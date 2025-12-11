const selectedProduct = {
  name: "Sample Product",
  price: 120,
  originalPrice: 150,
  description: "This is a stylish Jacket perfect for any occasion",
  brand: "FashionBrand",
  material: "Leather",
  colors: ["Black", "Red"],
  sizes: ["S", "M", "L", "XL"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      altText: "Sample Product Image 1",
    },
    {
      url: "https://picsum.photos/500/500?random=2",
      altText: "Sample Product Image 2",
    },
  ],
};

const ProductDetails = () => {
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border "
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={selectedProduct.images[0]?.url}
                alt="Main Product"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Mobile Thumbnail */}
          <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
              />
            ))}
          </div>

          {/* Right side*/}
          <div className="md:w-1/2 md:ml-10 ">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">{selectedProduct.name}</h1>

            <p className="text-lg text-zinc-600 mb-1 line-through">
              {selectedProduct.originalPrice && `${selectedProduct.originalPrice}`}
            </p>
            <p className="text-xl text-zinc-500 mb-2">${selectedProduct.price}</p>
            <p className="text-zinc-600 mb-4">{selectedProduct.description}</p>

            <div className="mb-4">
              <p className="text-zinc-700">Color:</p>
              <div className="flec gap-2 mt-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    className="w-8 h-8 rounded-full border brightness-50"
                    style={{
                      backgroundColor: color.toLocaleLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                  ></button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <p className="text-zinc-700">Size:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((size) => (
                  <button key={size} className="px-4 py-2 rounded border">
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-zinc-700">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2"></div>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col md:flex-row gap-4">
          <div className="bg-red-300 w-20 h-20 order-2 md:order-1"></div>
          <div className="bg-blue-300 w-100 h-100 order-1 md:order-2"></div>
        </div> */}
      </div>
    </div>
  );
};

export default ProductDetails;
