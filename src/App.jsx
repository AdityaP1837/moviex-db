import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Homepage/HomePage"
import Navbar from "./components/Navbar/Navbar"
import DetailsPage from "./pages/Details/DetailsPage"
import VideoPopUp from "./components/videoPopUp/VideoPopUp"

function App() {

  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            {/* <Route path="/movies" element={<h1>Movies</h1>}/> */}
            <Route path="/:mediaType/:id" element={<DetailsPage/>}/>
        </Routes>
    </>
  )
}


// iso_639_1
// :
// "en"
// iso_3166_1
// :
// "US"
// name
// :
// "Official Final Trailer"
// key
// :
// "4wxyy8Rcz4k"
// site
// :
// "YouTube"
// size
// :
// 2160
// type
// :
// "Trailer"
// official
// :
// true

// published_at
// :
// "2023-07-11T20:00:01.000Z"
// id
// :
// 
// new entry
// : 

export default App
