import { Link } from "react-router";

type ProductImage = {
  url: string;
  altText: string;
};

type Product = {
  _id: number | string;
  name: string;
  price: number;
  images: ProductImage[];
};

type ProductGridProps = {
  products: Product[];
};

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product, idx) => (
        <Link key={idx} to={`/product/${product._id}`} className="block">
          <div className="bg-white rounded-lg">
            <div className="w-full h-96 mb-2">
              <img
                src={product.images[0].url}
                alt={product.images[0].altText || product.name}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm mb-2">{product.name}</h3>
              <p className="text-zinc-500 font-medium text-sm tracking-tighter">${product.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
