import {AxiosResponse} from 'axios';
import type {TConvertation} from '@/global-types';

import {request} from '../../configure-network';

export const getFilteredDirections = async (): Promise<AxiosResponse<TConvertation>> => {
  return await request<TConvertation>('get', 'filter.json')
}