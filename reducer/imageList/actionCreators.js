import * as types from './types'


export const getImageListRequest = () => ({
  type: types.GET_UNSPLASH_IMAGE_REQUEST,
});

export const getImageListSuccess = (approved, disApproved) => ({
  type: types.GET_IMAGES_SUCCESS,
  payload: {
    approved,
    disApproved,
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
