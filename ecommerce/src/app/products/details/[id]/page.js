import Image from "next/image";
import Link from "next/link";
import { DetailCard } from "../../components/DetailCard";

export async function generateMetadata({ params }) {
  const { id } = await params;

  return {
    title: `Detalle del producto ${id}`,
    description: `Detalles del producto con ID ${id}`,
    keywords: ["producto", "detalle", id],
  };
}

export default async function DetailPage({ params }) {
  const { id } = await params;

  const res = await fetch(`http://localhost:3000/api/product/${id}`);
  const product = await res.json();

  console.log(product);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center mt-10 ">
        <div className="bg-slate-600 rounded-lg p-10 max-w-lg flex flex-col items-center">
          <div className="flex flex-col items-center justify-center gap-5">
            <h3 className="text-2xl font-bold text-center">
              Producto no encontrado
            </h3>
            <p className="text-lg text-center">
              Lo sentimos, el producto que estás buscando no existe.
            </p>
          </div>
        </div>

        <Link
          href="/products/all"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Regresar a la página principal
        </Link>
      </div>
    );
  }

  return <DetailCard product={product} />;
}
