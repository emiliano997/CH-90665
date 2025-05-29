import Link from "next/link";

export default async function PostPage({ params }) {
  const { id } = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60, // Revalidate every 60 seconds
    },
    cache: "default",
  });
  const post = await res.json();

  if (!post.id) {
    return (
      <div className="max-w-screen-md mx-auto p-4">
        <h1 className="text-3xl font-bold underline text-center mt-10">
          Post not found
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-screen-md mx-auto p-4">
      <h1 className="text-3xl font-bold underline text-center mt-10">
        {post.title}
      </h1>
      <p className="mt-4 text-lg">{post.body}</p>
      <Link href="/posts" className="text-blue-500 mt-4 inline-block">
        Back to posts
      </Link>
    </div>
  );
}
