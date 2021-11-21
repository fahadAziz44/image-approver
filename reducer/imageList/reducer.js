import * as types from './types'

const initialState = {
  approvedImages:[],
  unApprovedImages: [],
  loading: false,
  error: null
}

const imageListReducer = (state = initialState, { type, payload, error }) => {
  switch (type) {
    case types.ADD_TO_APPROVED_IMAGES:
      return {...state, approvedImages: state.approvedImages.concat(payload.image)}
    case types.ADD_TO_DISAPPROVED_IMAGES:
      return {...state, unApprovedImages: state.unApprovedImages.concat(payload.image)}
    case types.GET_IMAGES_REQUEST:
      return {...state, loading: true}
    case types.GET_IMAGES_SUCCESS:
      return { ...state, approvedImages: payload.approved, unApprovedImages: payload.unApproved }
    case types.GET_IMAGES_ERROR:
        return {
          ...state,
          loading: false,
          error: error instanceof Error ? error.message : error
        }
    default:
      return state
  }
}


export default imageListReducer