import react, { useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch} from 'react-redux'
import { selectIsInteractiveImageLoading, selectInteractiveImage } from '../reducer/interactiveImage/selectors'
import Image from 'next/image'
import InteractiveActions from './InterActiveActions'
import { getImageList } from '../reducer/imageList/actions'
import { approveImage, unApproveImage, getRandomImage } from '../reducer/interactiveImage/actions'
import { AiOutlinePlus } from 'react-icons/ai' 

const InteractiveImage = () => {
  const isLoading = useSelector(selectIsInteractiveImageLoading)
  const selectedImage = useSelector(selectInteractiveImage)
  const dispatch = useDispatch()
  
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

  const fetchRandomImage = useCallback(() => {
    dispatch(getRandomImage())
  }, [dispatch])
  return (
    <InteractiveImageWrapper>
      {isLoading && (
        <h1>Loading</h1>
      )}
      {!isLoading && selectedImage && selectedImage.urls && (
        <>
          <ImageContainer>
            <Image src={selectedImage.urls.small} alt='image' layout='fill' />
          </ImageContainer>
          <InteractiveActions onApprove={onApprove} onDisApprove={onDisApprove} />
        </>
      )}
      {!isLoading && !selectedImage && (
        <ImageContainer>
          <AddImageContainer onClick={fetchRandomImage}> <AiOutlinePlus size={200} color='#e3e8ef' /> </AddImageContainer>
        </ImageContainer>
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
const AddImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #eff2f7;
  cursor: pointer;
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