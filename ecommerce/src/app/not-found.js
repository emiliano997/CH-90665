import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center mt-10 ">
      <div className="bg-blue-800 rounded-lg p-10 max-w-lg flex flex-col items-center">
        <div className="flex flex-col items-center justify-center gap-5">
          <h3 className="text-2xl font-bold text-center">
            Página no encontrada
          </h3>
          <p className="text-lg text-center">
            Lo sentimos, la página que estás buscando no existe.
          </p>
        </div>

        <Link
          href="/"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Regresar a la página principal
        </Link>
      </div>
    </div>
  );
}
