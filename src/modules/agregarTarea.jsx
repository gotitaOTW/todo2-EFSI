import FormatearFecha from "./fecha";
function AgregarTarea({nombre, fecha}){
    return(
        <div className="cardTarea">
    <div className="contenidoTarea">
        <p className="nombreTarea">{nombre}</p>
        <p className="fechaTarea">{fecha}</p>
    </div>
    <div className="botonesTarea">
        <b><button className="borrarTarea">✖</button></b>
        <input type="checkbox" className="cbTarea"/>
    </div>
</div>
    )
}

export default AgregarTarea;