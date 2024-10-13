import { ReactNode, useEffect, useState } from "react";
import { get } from "./util/http.ts";
import BlogPosts, { BlogPost } from "./components/BlogPosts.tsx";
import fetchingImg from "./assets/data-fetching.png";
import { z } from "zod";

const rawDataBlogPostSchema = z.object({
  id: z.number(),
  userId: z.number(),
  title: z.string(),
  body: z.string(),
});

const expectedResponseDataSchema = z.array(rawDataBlogPostSchema);

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      try {
        const data = await get("https://jsonplaceholder.typicode.com/posts", z.array(rawDataBlogPostSchema));
        const parsedData = expectedResponseDataSchema.parse(data);
        const blogPosts: BlogPost[] = parsedData.map((rawPost) => {
          return {
            id: rawPost.id,
            title: rawPost.title,
            text: rawPost.body,
          };
        });
        setFetchedPosts(blogPosts);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }

      setIsFetching(false);
    }

    fetchPosts();
  }, []);

  let content: ReactNode;

  if (isFetching) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p>Error: {error}</p>;
  } else if (fetchedPosts.length > 0) {
    content = <BlogPosts posts={fetchedPosts} />;
  } else {
    content = <p>No posts found</p>;
  }

  return (
    <main>
      <img src={fetchingImg} alt="abstract image" />
      {content}
    </main>
  );
}

export default App;
