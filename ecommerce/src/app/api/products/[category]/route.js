import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/config";
import { DATABASES } from "@/firebase/databases";

export async function GET(request, { params }) {
  const { category } = await params;

  const productsRef = collection(db, DATABASES.PRODUCTS);

  const q =
    category === "all"
      ? productsRef
      : query(productsRef, where("category", "==", category));

  const querySnapshot = await getDocs(q);

  const products = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return NextResponse.json({
    products,
  });
}

export async function POST(request) {}
