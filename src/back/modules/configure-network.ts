import axios from "axios";

import { API_URL } from "@/constants";

enum methods {
  "get",
  "post",
  "put",
  "delete",
  "options",
}

type method = keyof typeof methods;

export async function request<T>(method: method, path: string, data?: unknown) {
  console.log(API_URL + path);
  return await axios[method]<T>(API_URL + path, data);
}
