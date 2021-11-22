import { useCallback, useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { selectIsImageListLoading, selectImageListApproved } from '../reducer/imageList/selectors'
import { getImageList } from '../reducer/imageList/actions'
import Image from 'next/image'
import { setInterActiveImage } from '../reducer/interactiveImage/actionCreators'
import { AiOutlinePlus } from 'react-icons/ai'
import { getRandomImage } from '../reducer/interactiveImage/actions'
import { ImageCarouselWrapper, ThumbContainer, ImageThumbs, AddImageContainer } from './ImageCarousel.style'

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
        <>
          <div className='carousel-heading title'>
            APPROVED IMAGES
          </div>
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
              <AddImageContainer> <AiOutlinePlus size={100} color='#e3e8ef' /> </AddImageContainer>
            </ThumbContainer>
          </ImageThumbs>
        </>
      )}
    </ImageCarouselWrapper>
  )
}

export default ImageCarousel
