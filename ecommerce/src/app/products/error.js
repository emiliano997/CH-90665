"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("An error occurred:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-80 bg-gray-900">
      <h1 className="text-2xl uppercase font-bold text-red-600">
        Ocurrió un error inesperado en la página de productos.
      </h1>
      <p className="mt-4 text-white text-xl">
        {error.message ||
          "Ocurrió un error inesperado en la página de productos."}
      </p>
      <button
        onClick={() => reset()}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Try Again
      </button>
    </div>
  );
}
