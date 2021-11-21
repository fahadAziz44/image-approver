import * as types from './types'


export const getImageListRequest = () => ({
  type: types.GET_IMAGES_REQUEST,
});

export const getImageListSuccess = (approved, unApproved) => ({
  type: types.GET_IMAGES_SUCCESS,
  payload: {
    approved,
    unApproved,
  }
});

export const getImageListError = (error) => ({
  type: types.GET_IMAGES_ERROR,
  error
});

export const addToApprovedImages = (image) => ({
  type: types.ADD_TO_APPROVED_IMAGES,
  payload: {
    image
  }
})

export const addToUnApprovedImages = (image) => ({
  type: types.ADD_TO_DISAPPROVED_IMAGES,
  payload: {
    image
  }
})
