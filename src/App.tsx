import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { routes } from "./routes"

export const App = () => {
	return <RouterProvider router={createBrowserRouter(routes)} />
}
