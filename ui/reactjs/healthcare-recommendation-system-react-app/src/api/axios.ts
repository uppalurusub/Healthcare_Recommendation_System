import type {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

import  axios   from "axios"

/**
 * Base URL
 * Example:
 * VITE_API_BASE_URL=http://localhost:8000
 */
const BASE_URL =
  import.meta.env.VITE_API_BASE_URL ??
  "http://localhost:8000";

/**
 * Axios Instance
 */
const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

/**
 * Request Interceptor
 */
apiClient.interceptors.request.use(
  (
    config: InternalAxiosRequestConfig
  ): InternalAxiosRequestConfig => {
    // Example:
    // const token = localStorage.getItem("token");
    //
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    console.log(
      `API Request: ${config.method?.toUpperCase()} ${config.url}`
    );

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

/**
 * Response Interceptor
 */
apiClient.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  (error: AxiosError<any>) => {
    if (error.response) {
      console.error(
        "API Error:",
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      console.error(
        "Network Error: Server is not reachable."
      );
    } else {
      console.error(error.message);
    }

    return Promise.reject(error);
  }
);

export default apiClient;

