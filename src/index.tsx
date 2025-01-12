import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'

import 'normalize.css'
import '@/assets/css/index.less'
import { HashRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
