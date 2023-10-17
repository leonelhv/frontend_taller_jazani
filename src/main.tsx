import React from 'react'
import ReactDOM from 'react-dom/client'
import "@popperjs/core"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "./core/styles/app.scss"
import { RouterProvider } from 'react-router-dom'
import router from './router/index.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
