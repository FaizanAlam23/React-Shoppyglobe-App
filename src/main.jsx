import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './redux/store.js'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <div className='min-h-screen bg-gradient-to-br from-purple-100 via-blue-200 to-blue-100'>
        <App />
      </div>
      
    </Provider>
  </StrictMode>,
)
