import { AxiosResponse } from 'axios';
import type { TDirections } from '@/global-types';

import { request } from '../../configure-network';

export const getDirections = async (): Promise<AxiosResponse<TDirections>> => {
  return await request<TDirections>('get', 'directions.json')
}