import React, { useState } from "react";

export const Address = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    pincode: "",
    flat: "",
    area: "",
    landmark: "",
    city: "",
    state: "",
    defaultAddress: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Address Submitted:", formData);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Enter a new delivery address</h2>

      <button className="w-full bg-blue-100 text-blue-700 py-2 px-4 rounded-md mb-4 flex items-center justify-center">
        Save time. Autofill your current location
      </button>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Country */}
        <div>
          <label className="block font-medium">Country/Region</label>
          <select className="w-full border p-2 rounded-md bg-gray-100" disabled>
            <option>India</option>
          </select>
        </div>

        {/* Full Name */}
        <div>
          <label className="block font-medium">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
            placeholder="Enter full name"
            required
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block font-medium">Mobile Number</label>
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
            placeholder="Enter mobile number"
            required
          />
        </div>

        {/* Pincode */}
        <div>
          <label className="block font-medium">Pincode</label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
            placeholder="6 digits [0-9] PIN code"
            required
          />
        </div>

        {/* Flat, House, Apartment */}
        <div>
          <label className="block font-medium">Flat, House no., Building</label>
          <input
            type="text"
            name="flat"
            value={formData.flat}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
            placeholder="Flat/House No, Apartment Name"
            required
          />
        </div>

        {/* Area, Street, Sector */}
        <div>
          <label className="block font-medium">Area, Street, Sector, Village</label>
          <input
            type="text"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
            placeholder="Street Name, Locality"
            required
          />
        </div>

        {/* Landmark */}
        <div>
          <label className="block font-medium">Landmark</label>
          <input
            type="text"
            name="landmark"
            value={formData.landmark}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
            placeholder="e.g. Near Apollo Hospital"
          />
        </div>

        {/* City & State */}
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block font-medium">Town/City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
              placeholder="City Name"
              required
            />
          </div>

          <div className="w-1/2">
            <label className="block font-medium">State</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
              required
            >
              <option value="">Choose a state</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Delhi">Delhi</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
            </select>
          </div>
        </div>

        {/* Default Address Checkbox */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="defaultAddress"
            checked={formData.defaultAddress}
            onChange={handleChange}
            className="w-4 h-4 mr-2"
          />
          <label className="text-sm">Make this my default address</label>
        </div>

        {/* Delivery Instructions */}
        <div>
          <label className="block font-medium">Delivery Instructions (Optional)</label>
          <textarea
            className="w-full border p-2 rounded-md"
            placeholder="Add preferences, notes, access codes..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-md"
        >
          Use this address
        </button>
      </form>
    </div>
  );
};

