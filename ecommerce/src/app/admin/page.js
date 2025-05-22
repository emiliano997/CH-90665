"use client";

import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <p className="mt-4 text-lg max-w-lg">Admin Section</p>
        <button
          className="mt-4 bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
          onClick={() => router.back()}
        >
          Volver
        </button>
      </div>
    </>
  );
}
