import axios from "axios";


const axiosApi = axios.create({
  baseURL: process?.env?.NEXT_PUBLIC_API_URL,
  // withCredentials: true,
});

export default axiosApi;

// export const setDefaultHeader = () => {
//   const cartCookie = getCookie("x-cart-session");
//   if (cartCookie.length) {
//     axiosApi.defaults.headers.common["x-cart-session"] = cartCookie;
//   }
// };
