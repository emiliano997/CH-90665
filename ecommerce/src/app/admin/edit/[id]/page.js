import { CreateForm } from "../../components/CreateForm";

export default async function EditPage({ params }) {
  const { id } = await params;

  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <h1 className="text-3xl font-bold underline text-center mt-10">
        Actualizar Producto
      </h1>
      <p className="mt-4 text-lg max-w-md text-center">
        Aquí puedes actualizar los detalles del producto con ID: {id}. Completa
        el formulario a continuación con la información actualizada del
        producto.
      </p>

      <div className="w-full max-w-md">
        <CreateForm id={id} />
      </div>
    </div>
  );
}
