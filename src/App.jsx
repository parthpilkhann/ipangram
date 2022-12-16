import './App.css'
import MedicalPage from "./pages/medicalPage/MedicalPage"
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Display from './pages/display/Display';

function App() {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MedicalPage />
    },
    {
      path: "/display",
      element: <Display />
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
