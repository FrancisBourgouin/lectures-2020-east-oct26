import GalleryItem from './GalleryItem'
import { useEffect } from 'react'

export default function Gallery(props) {
  const { imageList, selectImage } = props
  const parsedImages = imageList.map(image => <GalleryItem key={image.id} {...{ ...image, selectImage }} />)


  return (
    <section className="Gallery">
      {parsedImages}
    </section>
  )
}