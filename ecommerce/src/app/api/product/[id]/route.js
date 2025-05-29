import { db } from "@/firebase/config";
import { DATABASES } from "@/firebase/databases";
import { doc, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

// Obtener
export async function GET(request, { params }) {
  const { id } = await params;

  const productRef = doc(db, DATABASES.PRODUCTS, id);

  const productSnapshot = await getDoc(productRef);

  console.log(productSnapshot.data());

  return NextResponse.json({
    id: productSnapshot.id,
    ...productSnapshot.data(),
  });
}

// Actualizar
export async function PUT(request, { params }) {
  const { id } = await params;

  return NextResponse.json({
    message: "Hello from the products API route",
    id,
  });
}

// Eliminar
export async function DELETE(request, { params }) {
  const { id } = await params;

  return NextResponse.json({
    message: "Hello from the products API route",
    id,
  });
}
