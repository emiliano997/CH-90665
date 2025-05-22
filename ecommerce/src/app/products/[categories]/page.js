import { ProductCard } from "../components/ProductCard";
import { productsDB } from "../data/products";

export async function generateMetadata({ params, searchParams }, parent) {
  const { categories } = await params;
  return {
    title: `Products of ${categories}`,
    description: `Products of ${categories} category`,
    keywords: ["products", "categories", categories],
  };
}

export default async function CategoryPage({ params }) {
  const { categories } = await params;

  const products =
    categories === "all"
      ? productsDB
      : productsDB.filter((product) => product.category === categories);

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h3 className="text-2xl font-bold text-center">
        Productos de la categoria: {categories}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
