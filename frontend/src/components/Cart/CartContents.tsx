const CartContents = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "Product 1",
      size: "M",
      price: 29.99,
      quantity: 2,
      category: "category1",
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Product 2",
      size: "M",
      price: 129.99,
      quantity: 4,
      category: "category3",
      image: "https://picsum.photos/200?random=2",
    },
  ];

  return <div>Cart Contents</div>;
};

export default CartContents;
