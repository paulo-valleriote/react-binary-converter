import React from 'react'
import ReactDOM from 'react-dom/client'
import { Conversor } from './Components/Conversor'
import { Header } from './Components/Header'
import { StyledContainer } from './ContentWrapper'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledContainer>
      <Header />
      <Conversor />
    </StyledContainer>
  </React.StrictMode>
)
