import { RiDeleteBin3Line } from "react-icons/ri";

const CartContents = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "Product 1",
      size: "M",
      price: 29.99,
      quantity: 2,
      color: "Red",
      category: "category1",
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Product 2",
      size: "M",
      price: 129.99,
      quantity: 4,
      color: "Blue",
      category: "category3",
      image: "https://picsum.photos/200?random=2",
    },
  ];

  return (
    <div>
      {cartProducts.map((product, index) => (
        <div key={index} className="flex items-start justify-between py-4 border-b border-zinc-300">
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4 rounded"
            />
            <div>
              <h3>{product.name}</h3>
              <p className="text-sm text-zinc-500">
                size:{product.size} | color: {product.color}
              </p>
              <div className="flex items-center mt-2">
                <button className="border border-zinc-300 rounded px-2 py-1 text-xl font-medium">
                  −
                </button>
                <span className="mx-4">{product.quantity}</span>
                <button className="border border-zinc-300 rounded px-2 py-1 text-xl font-medium">
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <p>$ {product.price.toLocaleString()}</p>
            <button>
              <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
