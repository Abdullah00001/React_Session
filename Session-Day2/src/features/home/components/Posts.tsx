import { FC, useEffect, useState } from "react";
import IPost from "../interfaces/post.interface";
import { AxiosError } from "axios";
import postService from "../services/post.service";
import { ClockLoader } from "react-spinners";
import Post from "./Post";

const Posts: FC = () => {
  const [posts, setPosts] = useState<IPost[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await postService.getPosts();
        console.log(data);
        setPosts(data);
      } catch (error) {
        if (error instanceof AxiosError) {
          setError(error.response?.data?.message || "An error occurred");
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="max-w-[1144px] w-full mx-auto">
        <div className="grid grid-cols-4 gap-2 items-center">
          {loading && (
            <div className="col-span-4 flex justify-center">
              <ClockLoader />
            </div>
          )}
          {!loading && posts && posts.length > 0
            ? posts.map((item) => (
                <Post
                  key={item.id}
                  body={item.body}
                  id={item.id}
                  title={item.title}
                  userId={item.userId}
                />
              ))
            : !loading && error && <h1 className="col-span-4">{error}</h1>}
        </div>
      </div>
    </section>
  );
};

export default Posts;
