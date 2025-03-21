import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Profile from './profile/Profile.tsx'
import NotFoundPage from './notfound/NotFoundPage.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/profile",
    element: <Profile />
  }, 
  {
    path: "/*",
    element: <NotFoundPage />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
