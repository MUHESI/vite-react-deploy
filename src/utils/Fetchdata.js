import axios from "axios";
const BASE_URL= "http://localhost:5000"

export const postAPI = async (url, post) => {
  const res = await axios({
    method: "post",
    url: `${process.env.REACT_APP_API_URL}/api/${url}`,
    url: `${BASE_URL}/api/${url}`,
    data: post
  });
  return res;
};
export const getAPI = async (url, token) => {
  const res = await axios.get(`${BASE_URL}/api/${url}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res;
};

