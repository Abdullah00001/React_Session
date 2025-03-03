import { AxiosError } from "axios";
import postApi from "../apis/posts.api";

const postService = {
  getPosts: async () => {
    try {
      const response = await postApi.getPost();
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error;
      }
    }
  },
};

export default postService