import React, { useState, useEffect } from "react";
import { FaPlus, FaEye, FaLock } from "react-icons/fa";

function MasterData() {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : [];
  });
  const [showForm, setShowForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    sku: "",
    name: "",
    costPerItem: "",
    quantity: "",
    totalValue: "",
    dateOfLastOrder: "",
    vendor: "",
    stockLocation: "",
  });
  const [editProductId, setEditProductId] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Sync with localStorage
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleAddButtonClick = () => {
    setShowForm(true);
    setEditProductId(null);
    setNewProduct({
      sku: "",
      name: "",
      costPerItem: "",
      quantity: "",
      totalValue: "",
      dateOfLastOrder: "",
      vendor: "",
      stockLocation: "",
    });
    setErrorMessage("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const validateFields = (product) => {
    return Object.values(product).every((value) => value && value !== null);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateFields(newProduct)) {
      setErrorMessage("Please fill all required fields.");
      return;
    }
    if (editProductId !== null) {
      setProducts((prev) =>
        prev.map((product) =>
          product.id === editProductId ? { ...product, ...newProduct } : product
        )
      );
    } else {
      setProducts((prev) => [
        ...prev,
        { id: products.length + 1, ...newProduct },
      ]);
    }
    setShowForm(false);
    setNewProduct({
      sku: "",
      name: "",
      costPerItem: "",
      quantity: "",
      totalValue: "",
      dateOfLastOrder: "",
      vendor: "",
      stockLocation: "",
    });
    setErrorMessage("");
  };

  const handleEditClick = (id) => {
    const productToEdit = products.find((product) => product.id === id);
    setEditProductId(id);
    setNewProduct(productToEdit);
    setShowForm(true);
    setErrorMessage("");
  };

  const handleDeleteClick = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmDelete) {
      setProducts((prev) => prev.filter((product) => product.id !== id));
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto font-sans">
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
              name="sku"
              value={newProduct.sku}
              onChange={handleInputChange}
              placeholder="SKU"
              className="px-4 py-2 border rounded-md text-black"
            />
            <input
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="px-4 py-2 border rounded-md text-black"
            />
            <input
              type="text"
              name="costPerItem"
              value={newProduct.costPerItem}
              onChange={handleInputChange}
              placeholder="Cost Per Item"
              className="px-4 py-2 border rounded-md text-black"
            />
            <input
              type="text"
              name="quantity"
              value={newProduct.quantity}
              onChange={handleInputChange}
              placeholder="Quantity"
              className="px-4 py-2 border rounded-md text-black"
            />
            <input
              type="text"
              name="totalValue"
              value={newProduct.totalValue}
              onChange={handleInputChange}
              placeholder="Total Value"
              className="px-4 py-2 border rounded-md text-black"
            />
            <input
              type="date"
              name="dateOfLastOrder"
              value={newProduct.dateOfLastOrder}
              onChange={handleInputChange}
              className="px-4 py-2 border rounded-md text-black"
            />
            <input
              type="text"
              name="vendor"
              value={newProduct.vendor}
              onChange={handleInputChange}
              placeholder="Vendor"
              className="px-4 py-2 border rounded-md text-black"
            />
            <input
              type="text"
              name="stockLocation"
              value={newProduct.stockLocation}
              onChange={handleInputChange}
              placeholder="Stock Location"
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
            {editProductId ? "Update Product" : "Save Product"}
          </button>
        </form>
      )}

      {/* Product Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700 uppercase text-sm">
              <th className="px-4 py-2 border">S.NO</th>
              <th className="px-4 py-2 border">SKU</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Cost Per Item</th>
              <th className="px-4 py-2 border">Quantity</th>
              <th className="px-4 py-2 border">Total Value</th>
              <th className="px-4 py-2 border">Date of Last Order</th>
              <th className="px-4 py-2 border">Vendor</th>
              <th className="px-4 py-2 border">Stock Location</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={product.id}
                className="text-gray-600 hover:bg-gray-100 transition-all"
              >
                <td className="px-4 py-2 border text-center">{index + 1}</td>
                <td className="px-4 py-2 border">{product.sku}</td>
                <td className="px-4 py-2 border">{product.name}</td>
                <td className="px-4 py-2 border text-center">{product.costPerItem}</td>
                <td className="px-4 py-2 border text-center">{product.quantity}</td>
                <td className="px-4 py-2 border text-center">{product.totalValue}</td>
                <td className="px-4 py-2 border text-center">{product.dateOfLastOrder}</td>
                <td className="px-4 py-2 border">{product.vendor}</td>
                <td className="px-4 py-2 border">{product.stockLocation}</td>
                <td className="px-4 py-2 border text-center flex gap-2 justify-center">
                  <button
                    onClick={() => handleEditClick(product.id)}
                    className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteClick(product.id)}
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

export default MasterData;
