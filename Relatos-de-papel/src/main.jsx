import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BooksProvider } from "./context/BookContext.jsx";
import {PurchaseProvider} from "./context/PurchaseContext.jsx";

createRoot(document.getElementById('root')).render(

      <BooksProvider>
          <PurchaseProvider>
                <App />
          </PurchaseProvider>
      </BooksProvider>

)
