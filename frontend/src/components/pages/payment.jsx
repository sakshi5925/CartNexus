import React from 'react'
import { useState } from 'react';
export const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState("card");
    const [cardDetails, setCardDetails] = useState({
        cardNumber: "",
        expiry: "",
        cvv: "",
        name: "",
    });

    const handleCardChange = (e) => {
        const { name, value } = e.target;
        setCardDetails({ ...cardDetails, [name]: value });
    };

    const handlePayment = (e) => {
        e.preventDefault();
        console.log("Processing Payment with:", paymentMethod, cardDetails);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4">Payment Options</h2>

            {/* Payment Method Selection */}
            <div className="mb-4">
                <label className="block font-medium">Select Payment Method:</label>
                <div className="flex flex-col space-y-2 mt-2">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="card"
                            checked={paymentMethod === "card"}
                            onChange={() => setPaymentMethod("card")}
                            className="w-4 h-4 mr-2"
                        />
                        Credit/Debit Card
                    </label>

                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="upi"
                            checked={paymentMethod === "upi"}
                            onChange={() => setPaymentMethod("upi")}
                            className="w-4 h-4 mr-2"
                        />
                        UPI
                    </label>

                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="netbanking"
                            checked={paymentMethod === "netbanking"}
                            onChange={() => setPaymentMethod("netbanking")}
                            className="w-4 h-4 mr-2"
                        />
                        Net Banking
                    </label>
                </div>
            </div>

            {/* Card Details Form */}
            {paymentMethod === "card" && (
                <form onSubmit={handlePayment} className="space-y-4">
                    {/* Card Number */}
                    <div>
                        <label className="block font-medium">Card Number</label>
                        <input
                            type="text"
                            name="cardNumber"
                            value={cardDetails.cardNumber}
                            onChange={handleCardChange}
                            className="w-full border p-2 rounded-md"
                            placeholder="XXXX XXXX XXXX XXXX"
                            required
                        />
                    </div>

                    {/* Expiry & CVV */}
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label className="block font-medium">Expiry Date</label>
                            <input
                                type="text"
                                name="expiry"
                                value={cardDetails.expiry}
                                onChange={handleCardChange}
                                className="w-full border p-2 rounded-md"
                                placeholder="MM/YY"
                                required
                            />
                        </div>

                        <div className="w-1/2">
                            <label className="block font-medium">CVV</label>
                            <input
                                type="password"
                                name="cvv"
                                value={cardDetails.cvv}
                                onChange={handleCardChange}
                                className="w-full border p-2 rounded-md"
                                placeholder="XXX"
                                required
                            />
                        </div>
                    </div>

                    {/* Cardholder Name */}
                    <div>
                        <label className="block font-medium">Cardholder Name</label>
                        <input
                            type="text"
                            name="name"
                            value={cardDetails.name}
                            onChange={handleCardChange}
                            className="w-full border p-2 rounded-md"
                            placeholder="Full Name on Card"
                            required
                        />
                    </div>

                    {/* Pay Button */}
                    <button
                        type="submit"
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-md"
                    >
                        Pay Now
                    </button>
                </form>
            )}

            {/* UPI Payment */}
            {paymentMethod === "upi" && (
                <div className="mt-4">
                    <p className="text-gray-600">Open your UPI app and scan the QR code or enter your UPI ID.</p>
                    <input
                        type="text"
                        placeholder="Enter UPI ID"
                        className="w-full border p-2 rounded-md mt-2"
                    />
                    <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-md mt-4">
                        Pay via UPI
                    </button>
                </div>
            )}

            {/* Net Banking */}
            {paymentMethod === "netbanking" && (
                <div className="mt-4">
                    <p className="text-gray-600">Select your bank to proceed with net banking.</p>
                    <select className="w-full border p-2 rounded-md mt-2">
                        <option>Select Bank</option>
                        <option>State Bank of India</option>
                        <option>HDFC Bank</option>
                        <option>ICICI Bank</option>
                        <option>Axis Bank</option>
                        <option>Punjab National Bank</option>
                    </select>
                    <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-md mt-4">
                        Proceed to Pay
                    </button>
                </div>
            )}
        </div>
    );
};
