import { useRoutes } from "react-router-dom"
import { router } from "./routes"
import Modal from "./components/Modal"
import { useSelector } from "react-redux"


function App() {
  const { open } = useSelector(state => state.modal)

  return (
    <div className="bg-zinc-800 text-white min-h-screen flex items-center justify-center">
      { open && <Modal name={open}/> }
      { useRoutes(router) }
    </div>
  )
}

export default App
