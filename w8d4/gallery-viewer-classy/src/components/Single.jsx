export default function Single(props) {
  const { imageList, selectedImage, galleryView, previousImage, nextImage } = props

  const currentImage = imageList[selectedImage]
  console.log(currentImage, imageList, selectedImage)
  const handleLeft = () => {
    previousImage()
  }
  const handleRight = () => {
    nextImage()
  }

  const handleImage = () => {
    galleryView()
  }



  return (
    <section className="Single">
      {currentImage && <img onClick={handleImage} src={currentImage.path} alt={currentImage.name} />}
      {currentImage && <h1>{currentImage.name}</h1>}
      <button className="left" onClick={handleLeft}>Prev</button>
      <button className="right" onClick={handleRight}>Next</button>
    </section>
  )


}