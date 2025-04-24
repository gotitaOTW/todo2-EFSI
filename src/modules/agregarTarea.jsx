function AgregarTarea({nombre, fecha, completada}){
    return(
        <div className="cardTarea">
    <div className="contenidoTarea">
        <p className="nombreTarea">
            {completada ? <s>nombre</s> : nombre}
        </p>
        <p className="fechaTarea">{fecha}</p>
    </div>
    <div className="botonesTarea">
        <b><button className="borrarTarea">✖</button></b>
        <input type="checkbox" className="cbTarea" checked={completada} />
    </div>
</div>
    )
}

export default AgregarTarea;