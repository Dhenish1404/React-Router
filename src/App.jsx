import { Outlet } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"

function App() {

  // use Outlet Hook for the Layout of Project
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
