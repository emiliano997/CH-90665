import Link from "next/link";
import { ProductsTable } from "./components/ProductsTable";

export default async function AdminPage() {
  const products = await fetch("http://localhost:3000/api/products/all").then(
    (res) => res.json()
  );
  return (
    <>
      <div className="flex flex-col gap-5 items-center justify-center">
        <p className="mt-4 text-lg max-w-lg">Admin Section</p>
        <Link
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          href="/admin/create"
        >
          Create New Product
        </Link>

        <ProductsTable products={products} />
      </div>
    </>
  );
}
