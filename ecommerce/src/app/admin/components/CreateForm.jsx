"use client";

import { useState } from "react";
import { handleChange } from "@/utils/handleChange";

export function CreateForm() {
  const [data, setData] = useState({
    name: "",
    slug: "",
    description: "",
    price: 0,
    stock: 0,
    category: "",
    imageUrl: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setData((prevData) => ({
      ...prevData,
      price: parseFloat(prevData.price),
      stock: parseInt(prevData.stock),
    }));

    console.log("Submitting data:", data);

    // Validaciones
    if (!data.name || !data.slug || !data.description) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    if (parseFloat(data.price) <= 0 || parseInt(data.stock) <= 0) {
      alert("El precio y la cantidad en stock deben ser mayores a 0.");
      return;
    }

    if (
      data.imageUrl &&
      !/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/.test(data.imageUrl)
    ) {
      alert("Por favor, proporciona una URL de imagen válida.");
      return;
    }

    // Petición POST
    const response = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Error creating product:", error);
      return;
    }

    const result = await response.json();

    console.log("Product created successfully:", result);
    setData({
      name: "",
      slug: "",
      description: "",
      price: 0,
      stock: 0,
      category: "",
      imageUrl: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={(e) => handleChange({ e, setValues: setData, values: data })}
        placeholder="Product Name"
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        name="description"
        value={data.description}
        onChange={(e) => handleChange({ e, setValues: setData, values: data })}
        placeholder="Description"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="slug"
        value={data.slug}
        onChange={(e) => handleChange({ e, setValues: setData, values: data })}
        placeholder="Slug"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="number"
        name="price"
        value={data.price}
        onChange={(e) => handleChange({ e, setValues: setData, values: data })}
        placeholder="Price"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="number"
        name="stock"
        value={data.stock}
        onChange={(e) => handleChange({ e, setValues: setData, values: data })}
        placeholder="Stock Quantity"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="category"
        value={data.category}
        onChange={(e) => handleChange({ e, setValues: setData, values: data })}
        placeholder="Category"
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="imageUrl"
        value={data.imageUrl}
        onChange={(e) => handleChange({ e, setValues: setData, values: data })}
        placeholder="Image URL"
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Create Product
      </button>
    </form>
  );
}
