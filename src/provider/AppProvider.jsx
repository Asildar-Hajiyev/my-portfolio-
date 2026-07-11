import { Route, Routes } from "react-router-dom"
import Main from "../pages/Main"

function AppProvider() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>}/>
      </Routes>
    </>
  )
}

export default AppProvider
