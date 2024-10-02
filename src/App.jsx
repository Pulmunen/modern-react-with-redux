import {useState} from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import searchImages from './api'

function App() {
const [images, setImages] = useState([])

  const handleFormSubmit = async (term) => {
  const result = await searchImages(term)
  //store the results in state, then pass them to ImageList
  setImages(result)
  }

  return (
    <>
      <div>
        {<SearchBar onSubmit={handleFormSubmit}/>}
        <ImageList images={images}/>
      </div>
    </>
  )
}

export default App
