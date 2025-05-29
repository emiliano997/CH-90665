"use client";

import { useState } from "react";

function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "Contact",
    description: "Get in touch with us",
    domain: "https://ecommerce.com",
    keywords: ["About Us", "E-Commerce"],
  };
}

export default function ContactPage() {
  const [values, setValues] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!values.email || !values.message) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const response = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((res) => res.json());

    console.log(response);
    setValues({
      email: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold underline text-center mt-10">
        Contactános
      </h1>
      <p className="mt-4 text-lg max-w-md text-center">
        Si tienes alguna pregunta o inquietud, no dudes en ponerte en contacto
        con nosotros. Estamos aquí para ayudarte y asegurarnos de que tengas la
        mejor experiencia posible. Puedes enviarnos un correo electrónico a{" "}
        <a href="mailto:ecommerce@gmail.com" className="text-blue-500">
          ecommerce@gmail.com
        </a>
      </p>

      <form onSubmit={handleSubmit} className="mt-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Envíanos un mensaje</h2>
        <div className="mt-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-500"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Ingresa tu correo electrónico"
          />

          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-500 mt-4"
          >
            Mensaje
          </label>

          <textarea
            id="message"
            name="message"
            value={values.message}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Escribe tu mensaje aquí"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Enviar Mensaje
          </button>
        </div>
      </form>
    </div>
  );
}
