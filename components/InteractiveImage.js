import react, { useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch} from 'react-redux'
import { selectIsInteractiveImageLoading, selectInteractiveImage } from '../reducer/interactiveImage/selectors'
import Image from 'next/image'
import InteractiveActions from './InterActiveActions'
import { getImageList } from '../reducer/imageList/actions'
import { approveImage, unApproveImage, getRandomImage } from '../reducer/interactiveImage/actions'

const InteractiveImage = () => {
  const isLoading = useSelector(selectIsInteractiveImageLoading)
  const selectedImage = useSelector(selectInteractiveImage)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRandomImage())
    dispatch(getImageList())
  }, [dispatch])
  
  const onApprove = useCallback(
    () => {
      if(selectedImage) {
        dispatch(approveImage(selectedImage))
      }
    },
    [selectedImage, dispatch],
  )
  const onDisApprove = useCallback(
    () => {
      dispatch(unApproveImage(selectedImage))
    },
    [selectedImage, dispatch],
  )
  return (
    <InteractiveImageWrapper>
      {isLoading && (
        <h1>Loading</h1>
      )}
      {!isLoading && selectedImage && selectedImage.urls && (
        <>
          <ImageContainer className='interactive-image-container'>
            <Image src={selectedImage.urls.small} alt='image' layout='fill' />
          </ImageContainer>
          <InteractiveActions onApprove={onApprove} onDisApprove={onDisApprove} />
        </>
      )}
    </InteractiveImageWrapper>
  )
}

export default InteractiveImage

const ImageContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
`
const InteractiveImageWrapper = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;