import { getRandomImageRequest, getRandomImageSuccess, getRandomImageError,
  getImageListRequest, getImageListSuccess, getImageListError } from './actionCreators'

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


export const getRandomImage = () => async(dispatch) => {
  dispatch(getRandomImageRequest())
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_UNSPLASH_ADDRESS}/photos/random`, {
      method: 'GET',
      headers: {
        Authorization: `Client-ID ${process.env.NEXT_PUBLIC_ACCESS_KEY}`
      }
    }).then((resp) => resp.json())
    console.log('response after random image fetch: ', res)
    dispatch(getRandomImageSuccess(res))
  } catch(err) {
    dispatch(getRandomImageError(err))
  }
}