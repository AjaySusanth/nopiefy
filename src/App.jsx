import Challenge from "./components/Challenge"
import Home from "./components/Home"
import Practice from "./components/Practice"
import Progress from "./components/Progress"
import Result from "./components/Result"
import Study from "./components/Study"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/daily-challenges' element={<Challenge/>}/>
          <Route path='/practice' element={<Practice/>}/>
          <Route path='/study-materials' element={<Study/>}/>
          <Route path='/progress' element={<Progress/>}/>
          <Route path='/result' element={<Result/>}/>
        </Routes>
      </Router>
    </>
  )
}
export default App