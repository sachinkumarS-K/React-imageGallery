import './App.css'
import { Routes , Route } from 'react-router-dom'
import ImageList from './Components/ImageList/ImageList'
import Detail from './Components/DetailView/Detail'

function App() {

  return (
    <>
     <Routes>
      <Route path = "/" element = {<ImageList/>} />
      <Route path= "/image/:id" element = {<Detail/>} />
     </Routes>
    </>
  )
}

export default App
