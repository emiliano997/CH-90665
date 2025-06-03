import { ProductsTable } from "./components/ProductsTable";

export default function AdminPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <p className="mt-4 text-lg max-w-lg">Admin Section</p>

        <ProductsTable />
      </div>
    </>
  );
}
