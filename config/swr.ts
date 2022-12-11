import { AxiosRequestConfig } from "axios";

import api from "../utils/api";

export default function SWR() {
  return {
    fetcher: (args: AxiosRequestConfig) =>
      api({ ...args }).then(({ data }) => data),
  };
}
