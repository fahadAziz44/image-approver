import InteractiveImage from '../components/InteractiveImage'
import ImageCarousel from '../components/ImageCarousel'
import ImageViewerLayout from '../layout/ImageViewerLayout'

import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sellics Demo App</title>
        <meta name="description" content="Demo app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ImageViewerLayout>
          <ImageCarousel />
          <InteractiveImage />
        </ImageViewerLayout>
      </main>
    </div>
  )
}
