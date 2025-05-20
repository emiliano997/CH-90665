import { Navbar } from "@/components/Navbar/navbar";
import Image from "next/image";

// Static metadata for the page
// export const metadata = {
//   title: "E-Commerce",
//   description: "E-Commerce App",
//   domain: "https://ecommerce.com",
//   keywords: [
//     "E-Commerce",
//     "Next.js",
//     "React",
//     "Tailwind CSS",
//     "TypeScript",
//     "JavaScript",
//   ],
// };

export function generateMetadata({ params, searchParams }, parent) {
  const data = {
    title: "E-Commerce",
    description: "E-Commerce App",
    domain: "https://ecommerce.com",
    keywords: [
      "E-Commerce",
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "JavaScript",
    ],
  };

  return data;
}

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center mt-10">
        Bienvenido a la tienda
      </h1>
    </>
  );
}
