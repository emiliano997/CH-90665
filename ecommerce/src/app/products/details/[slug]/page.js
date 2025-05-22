import Link from "next/link";
import { productsDB } from "../../data/products";

export default async function DetailPage({ params }) {
  const { slug } = await params;

  const product = productsDB.find((product) => product.slug === slug);

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

  return (
    <div className="flex flex-col items-center justify-center mt-10 ">
      <div className="bg-blue-800 rounded-lg p-10 max-w-lg flex flex-col items-center">
        <div className="flex flex-col items-center justify-center gap-5">
          <h3 className="text-2xl font-bold text-center">{product.name}</h3>

          <p className="text-lg text-center">{product.description}</p>
          <p className="text-lg font-bold mt-2">${product.price}</p>
          <span className="text-sm text-gray-400 mt-2">
            Category: {product.category}
          </span>

          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
            Comprar
          </button>
        </div>
      </div>

      <Link
        href="/products/all"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Regresar a la página de productos
      </Link>
    </div>
  );
}
