import {AppDispatch} from "@/state";
import {getDirections} from '@/back'

import {DirectionsSlice} from '@/state'

export const fetchDirection = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(DirectionsSlice.actions.directionsFetching())
    const {data: directions} = await getDirections();
    dispatch(DirectionsSlice.actions.directionsFetchingSuccess(directions));
  } catch {
    dispatch(DirectionsSlice.actions.directionsFetchingError('error on getting directions'));
  }
}