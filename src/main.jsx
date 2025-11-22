import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GifExpertApp } from './components/GifExpertApp';
import "./assets/css/style.css"

createRoot(document.getElementById('root')).render(
  //<StrictMode>
  //{/*Esta es una de las razones por lo que la pagina se recarga 2 veces, si lo borrar se recargara una vez */}
      <GifExpertApp />
    
  //</StrictMode>
)
