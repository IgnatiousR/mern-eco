import { useEffect, useState } from "react";

type OrderItem = {
  name: string;
  image: string;
};

type ShippingAddress = {
  city: string;
  country: string;
};

type Order = {
  _id: string;
  createdAt: Date;
  shippingAddress: ShippingAddress;
  orderItems: OrderItem[];
  totalPrice: number;
  isPaid: boolean;
};

const MyOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    setTimeout(() => {
      const mockOrders: Order[] = [
        {
          _id: "12345",
          createdAt: new Date(),
          shippingAddress: { city: "New York", country: "USA" },
          orderItems: [
            {
              name: "Product 1",
              image: "https://picsum.photos/500/500?randowm=1",
            },
          ],
          totalPrice: 100,
          isPaid: true,
        },
        {
          _id: "56789",
          createdAt: new Date(),
          shippingAddress: { city: "New York", country: "USA" },
          orderItems: [
            {
              name: "Product 2",
              image: "https://picsum.photos/500/500?randowm=2",
            },
          ],
          totalPrice: 100,
          isPaid: false,
        },
      ];

      setOrders(mockOrders);
    }, 1000);
  });

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>
      <div className="relative shadow-md sm:rounded-lg overflow-hidden">
        <table className="min-w-full text-left text-zinc-500">
          <thead className="bg-zinc-300 text-xs uppercase text-zinc-700">
            <tr>
              <th className="py-2 px-4 sm:py-3">Image</th>
              <th className="py-2 px-4 sm:py-3">Order ID</th>
              <th className="py-2 px-4 sm:py-3">Created</th>
              <th className="py-2 px-4 sm:py-3">Shipping Address</th>
              <th className="py-2 px-4 sm:py-3">Items</th>
              <th className="py-2 px-4 sm:py-3">Price</th>
              <th className="py-2 px-4 sm:py-3">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order._id} className="border-b hover:border-zinc-50 cursor-pointer">
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    <img
                      src={order.orderItems[0].image}
                      alt={order.orderItems[0].name}
                      className="w-10 h-10 sm:w-12 sm:h-1/2 object-cover rounded-lg"
                    />
                  </td>
                  <td className="py-2 px-2 sm:py-4 font-medium text-zinc-900 whitespace-nowrap">
                    #{order._id}
                  </td>
                  <td className="py-2 px-2 sm:py-4 ">
                    {new Date(order.createdAt).toLocaleDateString()}{" "}
                    {new Date(order.createdAt).toLocaleTimeString()}
                  </td>
                  <td className="py-2 px-2 sm:py-4 ">
                    {order.shippingAddress
                      ? `${order.shippingAddress.city}, ${order.shippingAddress.country}`
                      : "N/A"}
                  </td>
                  <td className="py-2 px-2 sm:py-4 ">{order.orderItems.length}</td>
                  <td className="py-2 px-2 sm:py-4 ">${order.totalPrice}</td>
                  <td className="py-2 px-2 sm:py-4 ">
                    <span
                      className={`${
                        order.isPaid ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                      } px-2 py-1 rounded-full text-xs sm:text-sm font-medium`}
                    >
                      {order.isPaid ? "Paid" : "Pending"}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-4 text-center text-zinc-500">
                  You have no orders
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
