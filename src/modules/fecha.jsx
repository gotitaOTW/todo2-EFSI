function FormatearFecha({fecha}) {
    if(fecha!=null){
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1;
  const año = fecha.getFullYear().toString().slice(-2);

  const diaFormateado = dia < 10 ? '0' + dia : dia;
  const mesFormateado = mes < 10 ? '0' + mes : mes;

  return `${diaFormateado}/${mesFormateado}/${año}`;}
  else{
    return `Fecha no válida`
  }
}


  export default FormatearFecha;