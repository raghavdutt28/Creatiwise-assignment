import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './requested-components/Header.jsx'
import Footer from './requested-components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-dark min-h-screen font-syne text-white'>
      <div className='max-w-[1440px] mx-auto'>
        <Header/>
        <App />
        <Footer/>
      </div>
    </div>
  </StrictMode>,
)
