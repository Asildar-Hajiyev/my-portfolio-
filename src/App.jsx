import Footer from "./components/Footer"
import Header from "./components/Header"
import AppProvider from "./provider/AppProvider"

function App() {
  return (
    <>
      <Header/>
      <AppProvider/>
      <Footer/>
    </>
  )
}

export default App
