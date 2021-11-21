import react, { useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch} from 'react-redux'
import { selectIsImageListLoading, selectImageListApproved } from '../reducer/imageList/selectors'
import { getImageList } from '../reducer/imageList/actions'
import Image from 'next/image'
import { setInterActiveImage } from '../reducer/interactiveImage/actionCreators'
import { AiOutlinePlus } from 'react-icons/ai'
import { getRandomImage } from '../reducer/interactiveImage/actions'

const ImageCarousel = () => {
  const isLoading = useSelector(selectIsImageListLoading)
  const approvedImages = useSelector(selectImageListApproved)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getImageList())
  }, [dispatch])
  
  const onImageClick = useCallback((image) => {
    dispatch(setInterActiveImage(image))
  }, [dispatch])

  const fetchRandomImage = useCallback(() => {
    dispatch(getRandomImage())
  }, [dispatch])

  return (
    <ImageCarouselWrapper>
      {isLoading && (
        <h1>Loading</h1>
      )}
      {!isLoading && approvedImages && (
        <ImageThumbs>
          {
            approvedImages && approvedImages.map((image) => (
              <ThumbContainer key={image.id} onClick={() => onImageClick(image)}>
                <Image
                  src={image.urls.small}
                  alt='image'
                  layout='fill'
                  objectFit="cover"
                  quality={100}
                  key={image.id}
                />
                </ThumbContainer>
            ))
          }
          <ThumbContainer onClick={fetchRandomImage}>
            <AddImageContainer> <AiOutlinePlus size={200} color='#e3e8ef' /> </AddImageContainer>
          </ThumbContainer>
        </ImageThumbs>
      )}
    </ImageCarouselWrapper>
  )
}

export default ImageCarousel

const ImageCarouselWrapper = styled.div`
  height: 200px;
  padding: 20px 10px;
  display: flex;
`;

const ThumbContainer = styled.div`
    position: relative;
    min-width: 200px;
    max-width: 250px;
    cursor: pointer;
`

const ImageThumbs = styled.div`
    display: flex;
    overflow-x: auto;
    padding: 10px;
    flex-wrap: nowrap;
    column-gap: 20px;
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