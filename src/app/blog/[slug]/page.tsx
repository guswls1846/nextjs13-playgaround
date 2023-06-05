import React from "react";

interface Post {
  createdAt: string;
  name: string;
  avatar: string;
  slug: string;
}

interface PageProps {
  params: { slug: Post["slug"] };
}

export async function generateStaticParams() {
  const posts: Post[] = await fetch(`${process.env.MOCK_API_URL}/posts`).then(
    (res) => res.json()
  );

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const Page = ({ params }: PageProps) => {
  return <div>{JSON.stringify(params)}</div>;
};

export default Page;
