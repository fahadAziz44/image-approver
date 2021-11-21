import * as types from './types'
import { getImageListRequest, getImageListSuccess, getImageListError } from './actionCreators'

// INITIALIZES CLOCK ON SERVER
export const initialiseImages = () => async (dispatch) => {
  dispatch(getImageListRequest())
  try {
    const result = await fetch('/photos/random').then((resp) => resp.json())
    dispatch(getImageListSuccess(result.approved, result.disapproved))
  } catch(err) {
    dispatch(getImageListError(err))
  }

}
