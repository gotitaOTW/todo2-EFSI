import reactLogo from './assets/react.svg'
import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import AgregarTarea from './modules/agregarTarea.jsx'
import AgregarFiltro from './modules/agregarFiltro.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
    <form id="agregarTareaForm">
        <input type="text" placeholder="Nombre" id="nombre"/>
        <button type="submit">➕</button>
        <button type="submit">🗑️</button>
    </form>
    <div className="filtros">
      <AgregarFiltro contenido="✅+🕓"/>
      <AgregarFiltro contenido="✅"/>
      <AgregarFiltro contenido="🕓"/>
    </div>
    <div id="listaTareas">
      <AgregarTarea nombre="Comprar verduras" fecha="23/04/2025" completada={true}/>
      <AgregarTarea nombre="Estudiar judía" fecha="24/04/2025" completada={false}/> 
  </div>
  </div>
  )
}

export default App
