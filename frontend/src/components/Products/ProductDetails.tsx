import { useEffect, useState } from "react";

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
  const [mainImage, setMainImage] = useState(selectedProduct.images[0]?.url || "");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  // useEffect(() => {
  //   if (selectedProduct.images.length > 0) {
  //     setMainImage(selectedProduct.images[0].url);
  //   }
  // }, [selectedProduct]);
  const handleQuantityChange = (action: "add" | "subtract") => {
    if (action === "add") setQuantity((prevQuantity) => prevQuantity + 1);
    if (quantity > 1 && action === "subtract") setQuantity((prevQuantity) => prevQuantity - 1);
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6 ">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-zinc-900" : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img src={mainImage} alt="Main Product" className="w-full h-auto object-cover rounded-lg" />
            </div>
          </div>

          {/* Mobile Thumbnail */}
          <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText}
                // className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-zinc-900" : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          {/* Right side*/}
          <div className="md:w-1/2 md:ml-10 ">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">{selectedProduct.name}</h1>

            <p className="text-lg text-zinc-600 mb-1 line-through">
              ${selectedProduct.originalPrice && `${selectedProduct.originalPrice}`}
            </p>
            <p className="text-xl text-zinc-900 mb-2">${selectedProduct.price}</p>
            <p className="text-zinc-600 mb-4">{selectedProduct.description}</p>

            <div className="mb-4">
              <p className="text-zinc-700">Color:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => {
                      setSelectedColor(color);
                    }}
                    className={`w-8 h-8 rounded-full border brightness-50 ${
                      selectedColor === color ? "border-4 border-black" : "border-zinc-300"
                    }`}
                    style={{
                      backgroundColor: color.toLocaleLowerCase(),
                      // filter: "brightness(0.5)",
                    }}
                  ></button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <p className="text-zinc-700">Size:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => {
                      setSelectedSize(size);
                    }}
                    className={`px-4 py-2 rounded border ${selectedSize === size ? "bg-black text-white" : ""}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-zinc-700">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  className="px-2 py-1 bg-zinc-300 rounded text-lg"
                  onClick={() => handleQuantityChange("subtract")}
                >
                  −
                </button>
                <span className="text-lg">{quantity}</span>
                <button className="px-2 py-1 bg-zinc-300 rounded text-lg" onClick={() => handleQuantityChange("add")}>
                  +
                </button>
              </div>
            </div>

            <button className="bg-black text-white py-2 px-6 rounded w-full mb-4">Add to Cart</button>

            <div className="mt-10 text-zinc-700">
              <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
              <table className="w-full text-left text-sm text-zinc-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>

                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
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
