import axiosClient from "../../../configs/axios.config";
import { baseUrl } from "../../../constants/apiUrl.contants";

const postApi = {
  getPost: () => {
    return axiosClient.get(`${baseUrl}/posts`);
  },
};

export default postApi;
