import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey="6LfidW0sAAAAAE3vzXYPiJfehBg6SKjfLiOhF82E">
    <App />
    </GoogleReCaptchaProvider>
  </StrictMode>,
)
