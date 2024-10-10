
import axios, { AxiosHeaders } from "axios";
import Cookies from "js-cookie";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("econsent-user-accessToken");
    if (config.headers && token)
      (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`);
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

function refresh_token() {
  console.log("Refreshing access token");
  const token = localStorage.getItem("econsent-user-refresh-token");
  return axios.get(`${process.env.REACT_APP_BASE_URL}/auth/refresh`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}

let refreshing_token: any = null;

http.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const config = error.config;
    if (
      error.response &&
      error?.response?.data?.statusCode === 498 &&
      !config._retry
    ) {
      config._retry = true;
      try {
        refreshing_token = refreshing_token
          ? refreshing_token
          : refresh_token();
        let res = await refreshing_token;
        refreshing_token = null;
        if (res.data.data) {
          localStorage.setItem(
            "econsent-user-accessToken",
            res.data.data.accessToken
          );
          localStorage.setItem(
            "econsent-user-refresh-token",
            res.data.data.refreshToken
          );
        }
        return http(config);
      } catch (err) {
        localStorage.clear();
        Cookies.remove("isUserAuthenticated");
        window.location.reload();
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export default http;
