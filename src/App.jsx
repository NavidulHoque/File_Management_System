import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./RootLayout"
import Login from './pages/authentication/Login';
import Registration from './pages/authentication/Registration';
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';

const App = () => {
  const router = createBrowserRouter(createRoutesFromChildren(
    <Route>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
    </Route>
  ))
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
