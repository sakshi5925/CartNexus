import React from "react";

export const OrderDetails = () => {
  // Sample order details (Replace with actual order data)
  const orderDetails = {
    orderId: "#ORD123456",
    paymentMethod: "Credit Card",
    totalAmount: "₹2,499",
    shippingAddress: {
      name: "Sakshi Sharma",
      address: "123 Street, Gandhinagar, Gujarat",
      phone: "+91 9876543210",
    },
    items: [
      {
        id: 1,
        name: "Wireless Headphones",
        image: "https://via.placeholder.com/100",
        quantity: 1,
        price: "₹1,499",
      },
      {
        id: 2,
        name: "Smart Watch",
        image: "https://via.placeholder.com/100",
        quantity: 1,
        price: "₹999",
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Order Summary</h2>

      {/* Order ID & Payment Method */}
      <div className="mb-4">
        <p className="font-medium">Order ID: <span className="text-gray-700">{orderDetails.orderId}</span></p>
        <p className="font-medium">Payment Method: <span className="text-gray-700">{orderDetails.paymentMethod}</span></p>
      </div>

      {/* Purchased Items List */}
      <div className="border-t border-gray-300 pt-4">
        <h3 className="text-lg font-semibold mb-2">Purchased Items</h3>
        {orderDetails.items.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b py-2">
            <div className="flex items-center space-x-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-gray-600">Qty: {item.quantity}</p>
              </div>
            </div>
            <p className="font-semibold">{item.price}</p>
          </div>
        ))}
      </div>

      {/* Total Amount */}
      <div className="mt-4 border-t pt-4">
        <p className="text-xl font-semibold">Total Amount: <span className="text-green-600">{orderDetails.totalAmount}</span></p>
      </div>

      {/* Shipping Address */}
      <div className="mt-4 border-t pt-4">
        <h3 className="text-lg font-semibold mb-2">Shipping Address</h3>
        <p className="text-gray-700">{orderDetails.shippingAddress.name}</p>
        <p className="text-gray-700">{orderDetails.shippingAddress.address}</p>
        <p className="text-gray-700">{orderDetails.shippingAddress.phone}</p>
      </div>

      {/* Continue Shopping Button */}
      <div className="mt-6 text-center">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-md">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

