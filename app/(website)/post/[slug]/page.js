import PostPage from "./default";
import { urlForImage } from "@/lib/sanity/image";
import { getAllPostsSlugs, getPostBySlug } from "@/lib/sanity/client";

export async function generateStaticParams() {
  return await getAllPostsSlugs();
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  const postTitle = post.title + " | chikathreesix";
  return { 
    title: post.title,
    description: post.excerpt,
    twitter: {
      title: postTitle,
      description: post.excerpt,
      creator: "@chikathreesix",
      images: [ urlForImage(post.mainImage).src ],
      card: "summary_large_image"
    },
    openGraph: {
      title: postTitle,
      description: post.excerpt,
      type: 'article',
      images: [
        {
          url: urlForImage(post.mainImage).src,
        }
      ]
    },
  };
}

export default async function PostDefault({ params }) {
  const post = await getPostBySlug(params.slug);
  return <PostPage post={post} />;
}

// export const revalidate = 60;
