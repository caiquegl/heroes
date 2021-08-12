import React from 'react'
import Routes from './routes'
import { GlobalStyles } from './global'
import 'antd/dist/antd.css'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  )
}

export default App
