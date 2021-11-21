import { dbGetApprovedImages, dbGetUnApprovedImages } from '../../db'
import { getImageListRequest, getImageListSuccess, getImageListError } from './actionCreators'

export const getImageList = () => async(dispatch) => {
  dispatch(getImageListRequest())
  try {
    const approvedImages = await dbGetApprovedImages()
    const unApproved = await dbGetUnApprovedImages()
    dispatch(getImageListSuccess(approvedImages, unApproved))
  } catch(err) {
    dispatch(getImageListError(err instanceof Error ? err.message : err))
  }
}
