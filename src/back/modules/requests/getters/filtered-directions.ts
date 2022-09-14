import { AxiosResponse } from "axios";
import type { TConvertations } from "@/global-types";

import { request } from "../../configure-network";

export const getFilteredDirections = async (): Promise<
  AxiosResponse<TConvertations>
> => {
  return await request<TConvertations>("get", "filter.json");
};
