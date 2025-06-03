import { db } from "@/firebase/config";
import { DATABASES } from "@/firebase/databases";
import { doc, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();

  const { name, slug, description, price, stock, category, imageUrl } = body;

  if (!name || !slug || !description) {
    return NextResponse.json(
      {
        error:
          "Por favor, completa todos los campos obligatorios: nombre, slug y descripción.",
      },
      { status: 400 }
    );
  }

  if (price <= 0 || stock <= 0) {
    return NextResponse.json(
      {
        error: "El precio y la cantidad en stock deben ser mayores a 0.",
      },
      { status: 400 }
    );
  }

  if (imageUrl && !/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/.test(imageUrl)) {
    return NextResponse.json(
      {
        error: "Por favor, proporciona una URL de imagen válida.",
      },
      { status: 400 }
    );
  }

  const product = {
    name,
    slug,
    description,
    price: parseFloat(price),
    stock: parseInt(stock, 10),
    category,
    imageUrl: imageUrl || "",
  };

  try {
    const docRef = doc(db, DATABASES.PRODUCTS, slug);

    await setDoc(docRef, product);

    return NextResponse.json(
      {
        message: "Producto creado exitosamente.",
        product: { id: product.slug, ...product },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Error al crear el producto. Inténtalo de nuevo más tarde." },
      { status: 500 }
    );
  }
}
