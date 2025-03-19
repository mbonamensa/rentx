import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import { makeServer } from '../server'

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
