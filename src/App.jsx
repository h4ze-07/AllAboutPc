import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from "./components/Root"
import Lection from "./components/Lection"
import Video from "./components/Video"
import Test from "./components/Test"

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Lection />
        },
        {
          path: '/video',
          element: <Video />
        },
        {
          path: '/test',
          element: <Test />
        },
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
