import { useCallback } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch} from 'react-redux'
import { selectIsInteractiveImageLoading, selectInteractiveImage, selectIfImagePresent } from '../reducer/interactiveImage/selectors'
import Image from 'next/image'
import InteractiveActions from './InterActiveActions'
import { approveImage, unApproveImage, getRandomImage } from '../reducer/interactiveImage/actions'
import { AiOutlinePlus } from 'react-icons/ai' 

const InteractiveImage = () => {
  const isLoading = useSelector(selectIsInteractiveImageLoading)
  const selectedImage = useSelector(selectInteractiveImage)
  const imageApproved = useSelector(selectIfImagePresent(selectedImage?.id))
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
          {!imageApproved && (
            <InteractiveActions onApprove={onApprove} onDisApprove={onDisApprove} />
          )}
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;