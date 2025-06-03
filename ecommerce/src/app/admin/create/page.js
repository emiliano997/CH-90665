import { CreateForm } from "../components/CreateForm";

export default function CreatePage() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <h1 className="text-3xl font-bold underline text-center mt-10">
        Crear Producto
      </h1>
      <p className="mt-4 text-lg max-w-md text-center">
        Aquí puedes crear un nuevo producto para tu tienda. Completa el
        formulario a continuación con los detalles del producto.
      </p>

      <div className="w-full max-w-md">
        <CreateForm />
      </div>
    </div>
  );
}
