import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";


// disable right click
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

// disable copy
document.addEventListener("copy", (e) => {
  e.preventDefault();
});

// disable Ctrl+C / Ctrl+A
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && (e.key === "c" || e.key === "a")) {
    e.preventDefault();
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey="6LfidW0sAAAAAE3vzXYPiJfehBg6SKjfLiOhF82E">
      <App />
    </GoogleReCaptchaProvider>
  </StrictMode>,
)