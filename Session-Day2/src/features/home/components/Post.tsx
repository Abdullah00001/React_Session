import { FC } from "react";
import IPost from "../interfaces/post.interface";

const Post: FC<IPost> = ({ body, id, title, userId }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      <p className="text-gray-700 mt-2">{body}</p>
      <div className="mt-4 text-sm text-gray-500">
        Post ID: {id} | User ID: {userId}
      </div>
    </div>
  );
};

export default Post;
