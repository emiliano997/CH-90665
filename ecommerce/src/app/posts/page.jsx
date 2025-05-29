import Link from "next/link";

export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60, // Revalidate every 60 seconds
    },
    cache: "default",
  });
  const posts = await res.json();

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <ul className="flex flex-col gap-2">
        {posts.map((post) => (
          <li
            className="font-bold border bg-blue-900 text-white p-5 uppercase tracking-tighter"
            key={post.id}
          >
            {post.title}
            <Link href={`/posts/${post.id}`}>
              <svg
                className="w-5 h-5 inline-block ml-2"
                viewBox="0 0 16 16"
                fill="#FFF"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M8 6L8 2L10 2L16 8L10 14L8 14L8 10L-1.74845e-07 10L-3.01991e-07 6L8 6Z"></path>{" "}
                </g>
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
