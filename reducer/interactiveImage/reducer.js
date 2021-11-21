import * as types from './types'

const initialState = {
  approvedImages:[],
  unApprovedImages: [],
  fetching: false,
  error: null
}

const imageInterActiveReducer = (state = initialState, { type, payload, error }) => {
  switch (type) {
    case types.APPROVE_UNSPLASH_IMAGE_REQUEST:
      return {...state, fetching: true}
    case types.APPROVE_UNSPLASH_IMAGE_SUCCESS:
      return {
        ...state,
        fetching: false,
        approvedImages: payload.approvedImages,
        unApprovedImages: payload.unApprovedImages
      }
      case types.APPROVE_UNSPLASH_IMAGE_ERROR:
        return {
          ...state,
          fetching: false,
          error: error instanceof Error ? error.message : error
        }
    default:
      return state
  }
}


export default imageInterActiveReducer