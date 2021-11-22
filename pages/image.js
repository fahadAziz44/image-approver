import InteractiveImage from '../components/InteractiveImage'
import ImageCarousel from '../components/ImageCarousel'
import ImageViewerLayout from '../layout/ImageViewerLayout'

const Index = () => {
  return (
    <ImageViewerLayout>
      <ImageCarousel />
      <InteractiveImage />
    </ImageViewerLayout>
  )
}

export default Index