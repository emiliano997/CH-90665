import { ProductList } from "../components/ProductList";
import Link from "next/link";
import { Suspense } from "react";
import { Spinner } from "@/components/Spinner/Spinner";

export async function generateMetadata({ params, searchParams }, parent) {
  const { category } = await params;
  return {
    title: `Products of ${category}`,
    description: `Products of ${category} category`,
    keywords: ["products", "categories", category],
  };
}

export function generateStaticParams() {
  return [
    { category: "all" },
    { category: "electronics" },
    { category: "clothing" },
    { category: "home-appliances" },
  ];
}

export default async function CategoryPage({ params }) {
  const { category } = await params;

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h3 className="text-2xl font-bold text-center">
        Productos de la categoria: {category}
      </h3>

      <div className="flex flex-wrap justify-center mt-4">
        <Link
          className="bg-blue-500 text-white px-4 py-2 rounded m-2"
          href={"/products/all"}
        >
          Todos
        </Link>
        <Link
          className="bg-blue-500 text-white px-4 py-2 rounded m-2"
          href={"/products/electronics"}
        >
          Electrónica
        </Link>
        <Link
          className="bg-blue-500 text-white px-4 py-2 rounded m-2"
          href={"/products/clothing"}
        >
          Ropa
        </Link>
        <Link
          className="bg-blue-500 text-white px-4 py-2 rounded m-2"
          href={"/products/home-appliances"}
        >
          Electrodomésticos
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <Suspense fallback={<Spinner />}>
          <ProductList category={category} />
        </Suspense>
      </div>
    </div>
  );
}
