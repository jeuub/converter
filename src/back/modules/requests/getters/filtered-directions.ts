import { AxiosResponse } from 'axios';
import type { TConvertaion } from '@/global-types';

import { request } from '../../configure-network';

export const getFilteredDirections = async (): Promise<AxiosResponse<TConvertaion>> => {
  return await request<TConvertaion>('get', 'filter.json')
}