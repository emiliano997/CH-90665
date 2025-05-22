export function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "About Us",
    description: "Learn more about our company and team",
    domain: "https://ecommerce.com",
    keywords: ["About Us", "E-Commerce"],
  };
}

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold underline text-center mt-10">
        Sobre Nosotros
      </h1>
      <p className="mt-4 text-lg max-w-lg">
        Somos una empresa dedicada a ofrecer la mejor experiencia de compra en
        línea. Nuestro objetivo es proporcionar productos de alta calidad y un
        servicio al cliente excepcional.{" "}
      </p>
    </div>
  );
}
