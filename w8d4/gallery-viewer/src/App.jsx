import { useState, useEffect } from 'react'

import Gallery from './components/Gallery'
import Single from './components/Single'

import { GALLERY, SINGLE } from "./helpers/modes"
import originalImageData from "./helpers/imageList"

import './App.css';

function App() {
  const [mode, setMode] = useState(GALLERY)
  const [imageList, setImageList] = useState(originalImageData)
  const [selectedImage, setSelectedImage] = useState(null)

  const nextImage = () => {
    if (selectedImage < imageList.length - 1) {
      setSelectedImage(selectedImage + 1)
    } else {
      setSelectedImage(0)
    }
  }

  const previousImage = () => {
    if (selectedImage > 0) {
      setSelectedImage(selectedImage - 1)
    } else {
      setSelectedImage(imageList.length - 1)
    }
  }

  const selectImage = (id) => {
    setSelectedImage(id)
    setMode(SINGLE)
  }

  const galleryView = () => {
    setSelectedImage(null)
    setMode(GALLERY)
  }

  return (
    <div className="App">
      <h1>Welcome to Night City !</h1>
      {mode === SINGLE && <Single {...{ imageList, selectedImage, galleryView, previousImage, nextImage }} />}
      {mode === GALLERY && <Gallery {...{ imageList, selectImage }} />}
    </div>
  );
}

export default App;
