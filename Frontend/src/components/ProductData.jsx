import React from "react";
import { FaPlus, FaEye, FaLock } from "react-icons/fa";

function ProductData() {
  const products = [
    { id: 1, sku: "SKU1234", img: "https://via.placeholder.com/50", name: "Product 1", price: "$10" },
    { id: 2, sku: "SKU5678", img: "https://via.placeholder.com/50", name: "Product 2", price: "$15" },
    { id: 3, sku: "SKU9101", img: "https://via.placeholder.com/50", name: "Product 3", price: "$20" },
    { id: 3, sku: "SKU9101", img: "https://via.placeholder.com/50", name: "Product 3", price: "$20" },
    { id: 3, sku: "SKU9101", img: "https://via.placeholder.com/50", name: "Product 3", price: "$20" },
    { id: 3, sku: "SKU9101", img: "https://via.placeholder.com/50", name: "Product 3", price: "$20" },
     { id: 3, sku: "SKU9101", img: "https://via.placeholder.com/50", name: "Product 3", price: "$20" },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto font-sans">
      {/* Action Buttons */}
      <div className="flex justify-end gap-4 mb-6">
        <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:shadow-lg hover:bg-green-600 transition-all">
          <FaPlus /> Add
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:shadow-lg hover:bg-blue-600 transition-all">
          <FaEye /> See
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:shadow-lg hover:bg-red-600 transition-all">
          <FaLock /> Lock
        </button>
      </div>

      {/* Product Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700 uppercase text-sm">
              <th className="px-4 py-2 border">S.NO</th>
              <th className="px-4 py-2 border">SKU</th>
              <th className="px-4 py-2 border">Image</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Price</th>
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
                <td className="px-4 py-2 border text-center">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-12 h-12 rounded-full mx-auto"
                  />
                </td>
                <td className="px-4 py-2 border">{product.name}</td>
                <td className="px-4 py-2 border text-center">{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductData;
