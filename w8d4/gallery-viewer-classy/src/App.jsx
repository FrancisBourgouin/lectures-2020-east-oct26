import { Component } from 'react'
import Gallery from './components/Gallery'
import Single from './components/Single'
import Spy from './components/Spy'
import { GALLERY, SINGLE } from "./helpers/modes"
import originalImageData from "./helpers/imageList"

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: "GALLERY",
      imageList: originalImageData,
      selectedImage: null,
      foundSpy: false
    }
  }

  nextImage = () => {
    const { imageList, selectedImage } = this.state
    if (selectedImage < imageList.length - 1) {
      this.setState(prev => ({ ...prev, selectedImage: prev.selectedImage + 1 }))
    } else {
      this.setState(prev => ({ ...prev, selectedImage: 0 }))
    }
  }

  previousImage = () => {
    const { imageList, selectedImage } = this.state
    if (selectedImage > 0) {
      this.setState(prev => ({ ...prev, selectedImage: selectedImage - 1 }))

    } else {
      this.setState(prev => ({ ...prev, selectedImage: imageList.length - 1 }))
    }
  }

  selectImage = (id) => {
    this.setState(prev => ({ ...prev, selectedImage: id, mode: SINGLE }))
  }

  galleryView = () => {
    this.setState(prev => ({ ...prev, selectedImage: null, mode: GALLERY }))
  }

  deleteSpy = () => {
    this.setState(prev => ({ ...prev, foundSpy: true }))
  }

  render() {
    const { mode, imageList, selectedImage, foundSpy } = this.state
    const { previousImage, nextImage, selectImage, galleryView, deleteSpy } = this

    return (
      <div className="App">
        <h1>Welcome to Night City !</h1>
        {mode === SINGLE && <Single {...{ imageList, selectedImage, galleryView, previousImage, nextImage }} />}
        {mode === GALLERY && <Gallery {...{ imageList, selectImage }} />}
        {!foundSpy && <Spy deleteSpy={deleteSpy} />}
      </div>
    )
  }
}


export default App;
