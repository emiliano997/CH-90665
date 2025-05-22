export function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "Contact",
    description: "Get in touch with us",
    domain: "https://ecommerce.com",
    keywords: ["About Us", "E-Commerce"],
  };
}

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold underline text-center mt-10">
        Contactános
      </h1>
      <p className="mt-4 text-lg max-w-lg">
        Si tienes alguna pregunta o inquietud, no dudes en ponerte en contacto
        con nosotros. Estamos aquí para ayudarte y asegurarnos de que tengas la
        mejor experiencia posible. Puedes enviarnos un correo electrónico a{" "}
        <a href="mailto:ecommerce@gmail.com" className="text-blue-500">
          ecommerce@gmail.com
        </a>
      </p>
    </div>
  );
}
