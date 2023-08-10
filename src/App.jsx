import { Routes, Route } from "react-router-dom"
import Main from "./components/Main"
import Chatbox from "./components/Chatbox"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/chatbox" element={<Chatbox/>}/>
     </Routes>
    </>
  )
}

export default App