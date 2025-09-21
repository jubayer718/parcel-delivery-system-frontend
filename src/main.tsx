import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'
import { router } from './routes/index.ts'
import { Provider } from 'react-redux'
import { store } from './Redux/store.ts'
import { Toaster as HotToast } from 'react-hot-toast'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Toaster richColors />
      <HotToast />
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
