import React, { useState, useEffect } from "react";
import { FaPlus, FaEye, FaLock } from "react-icons/fa";

function CustomerData() {
  const [customers, setCustomers] = useState(() => {
    const savedCustomers = localStorage.getItem("customers");
    return savedCustomers ? JSON.parse(savedCustomers) : [];
  });
  const [showForm, setShowForm] = useState(false);
  const [newCustomer, setNewCustomer] = useState({
    contactName: "",
    companyName: "",
    phoneNumber: "",
    altPhoneNumber: "",
    emailAddress: "",
    address: "",
    state: "",
    city: "",
    pinCode: "",
    gstNumber: "",
    businessAddress: "",
  });
  const [editCustomerId, setEditCustomerId] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("customers", JSON.stringify(customers));
  }, [customers]);

  const handleAddButtonClick = () => {
    setShowForm(true);
    setEditCustomerId(null);
    setNewCustomer({
      contactName: "",
      companyName: "",
      phoneNumber: "",
      altPhoneNumber: "",
      emailAddress: "",
      address: "",
      state: "",
      city: "",
      pinCode: "",
      gstNumber: "",
      businessAddress: "",
    });
    setErrorMessage("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer((prev) => ({ ...prev, [name]: value }));
  };

  const validateFields = (customer) => {
    return Object.values(customer).every((value) => value && value !== null);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateFields(newCustomer)) {
      setErrorMessage("Please fill all required fields.");
      return;
    }
    if (editCustomerId !== null) {
      setCustomers((prev) =>
        prev.map((customer) =>
          customer.id === editCustomerId ? { ...customer, ...newCustomer } : customer
        )
      );
    } else {
      setCustomers((prev) => [
        ...prev,
        { id: customers.length + 1, ...newCustomer },
      ]);
    }
    setShowForm(false);
    setErrorMessage("");
    setNewCustomer({
      contactName: "",
      companyName: "",
      phoneNumber: "",
      altPhoneNumber: "",
      emailAddress: "",
      address: "",
      state: "",
      city: "",
      pinCode: "",
      gstNumber: "",
      businessAddress: "",
    });
  };

  const handleEditClick = (id) => {
    const customerToEdit = customers.find((customer) => customer.id === id);
    setEditCustomerId(id);
    setNewCustomer(customerToEdit);
    setShowForm(true);
    setErrorMessage("");
  };

  const handleDeleteClick = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this customer?"
    );
    if (confirmDelete) {
      setCustomers((prev) => prev.filter((customer) => customer.id !== id));
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto font-sans">
      {/* Action Buttons */}
      <div className="flex justify-end gap-4 mb-6">
        <button
          onClick={handleAddButtonClick}
          className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:shadow-lg hover:bg-green-600 transition-all"
        >
          <FaPlus /> Add
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:shadow-lg hover:bg-blue-600 transition-all">
          <FaEye /> See
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:shadow-lg hover:bg-red-600 transition-all">
          <FaLock /> Lock
        </button>
      </div>

      {/* Conditional Form */}
      {showForm && (
        <form
          onSubmit={handleFormSubmit}
          className="p-4 border rounded-lg shadow-md bg-gray-50 mb-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="contactName"
              value={newCustomer.contactName}
              onChange={handleInputChange}
              placeholder="Contact Name"
              className="px-4 py-2 border rounded-md text-black"
            />
            <input
              type="text"
              name="companyName"
              value={newCustomer.companyName}
              onChange={handleInputChange}
              placeholder="Company Name"
              className="px-4 py-2 border rounded-md text-black"
            />
            <input
              type="text"
              name="phoneNumber"
              value={newCustomer.phoneNumber}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="px-4 py-2 border rounded-md text-black"
            />
            <input
              type="text"
              name="altPhoneNumber"
              value={newCustomer.altPhoneNumber}
              onChange={handleInputChange}
              placeholder="Alternative Phone Number"
              className="px-4 py-2 border rounded-md text-black"
            />
            <input
              type="email"
              name="emailAddress"
              value={newCustomer.emailAddress}
              onChange={handleInputChange}
              placeholder="Email Address"
              className="px-4 py-2 border rounded-md text-black"
            />
            <input
              type="text"
              name="address"
              value={newCustomer.address}
              onChange={handleInputChange}
              placeholder="Address"
              className="px-4 py-2 border rounded-md text-black"
            />
            <input
              type="text"
              name="state"
              value={newCustomer.state}
              onChange={handleInputChange}
              placeholder="State"
              className="px-4 py-2 border rounded-md text-black"
            />
            <input
              type="text"
              name="city"
              value={newCustomer.city}
              onChange={handleInputChange}
              placeholder="City"
              className="px-4 py-2 border rounded-md text-black"
            />
            <input
              type="text"
              name="pinCode"
              value={newCustomer.pinCode}
              onChange={handleInputChange}
              placeholder="Pin Code"
              className="px-4 py-2 border rounded-md text-black"
            />
            <input
              type="text"
              name="gstNumber"
              value={newCustomer.gstNumber}
              onChange={handleInputChange}
              placeholder="GST Number"
              className="px-4 py-2 border rounded-md text-black"
            />
            <input
              type="text"
              name="businessAddress"
              value={newCustomer.businessAddress}
              onChange={handleInputChange}
              placeholder="Business Address"
              className="px-4 py-2 border rounded-md text-black"
            />
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:shadow-lg hover:bg-green-600 transition-all"
          >
            {editCustomerId ? "Update Customer" : "Save Customer"}
          </button>
        </form>
      )}

      {/* Customer Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700 uppercase text-sm">
              <th className="px-4 py-2 border">S.NO</th>
              <th className="px-4 py-2 border">Contact Name</th>
              <th className="px-4 py-2 border">Company Name</th>
              <th className="px-4 py-2 border">Phone Number</th>
              <th className="px-4 py-2 border">Alt. Phone Number</th>
              <th className="px-4 py-2 border">Email Address</th>
              <th className="px-4 py-2 border">Address</th>
              <th className="px-4 py-2 border">State</th>
              <th className="px-4 py-2 border">City</th>
              <th className="px-4 py-2 border">Pin Code</th>
              <th className="px-4 py-2 border">GST Number</th>
              <th className="px-4 py-2 border">Business Address</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr
                key={customer.id}
                className="text-gray-600 hover:bg-gray-100 transition-all"
              >
                <td className="px-4 py-2 border text-center">{index + 1}</td>
                <td className="px-4 py-2 border">{customer.contactName}</td>
                <td className="px-4 py-2 border">{customer.companyName}</td>
                <td className="px-4 py-2 border">{customer.phoneNumber}</td>
                <td className="px-4 py-2 border">{customer.altPhoneNumber}</td>
                <td className="px-4 py-2 border">{customer.emailAddress}</td>
                <td className="px-4 py-2 border">{customer.address}</td>
                <td className="px-4 py-2 border">{customer.state}</td>
                <td className="px-4 py-2 border">{customer.city}</td>
                <td className="px-4 py-2 border">{customer.pinCode}</td>
                <td className="px-4 py-2 border">{customer.gstNumber}</td>
                <td className="px-4 py-2 border">{customer.businessAddress}</td>
                <td className="px-4 py-2 border flex gap-2 justify-center">
                  <button
                    onClick={() => handleEditClick(customer.id)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteClick(customer.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerData;
