import reactLogo from './assets/react.svg'
import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import AgregarTarea from './modules/agregarTarea.jsx'
import FormatearFecha from './modules/fecha.jsx'
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
      <AgregarTarea nombre="Comprar verduras" fecha={FormatearFecha(new Date())}/>
      <AgregarTarea nombre="Estudiar judía" fecha={FormatearFecha(new Date())}/> 
  </div>
  </div>
  )
}

export default App
