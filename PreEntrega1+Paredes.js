let datosCliente = prompt("Ingrese su Nombre y Apellido: (ESC para salir)");



while (datosCliente != "ESC") {
    let textoTipoAlimento = "Ingrese su Paquete de Servicios:\n\n";
    textoTipoAlimento += "1-VitalCan\n";
    textoTipoAlimento += "2-Cat Chow\n";
    textoTipoAlimento += "3-Purina\n";
    textoTipoAlimento += "4-Vitaly";
    let TipoAlimento = parseInt((prompt(textoTipoAlimento)));
    alert("Usted a Elejido la Opcion Nro: " + TipoAlimento);
let kilo1 = 1;
let total;
    if (TipoAlimento == 1) {
        total = kilo1 * 1000;
    } else if (TipoAlimento == 2) {
        total = kilo1 * 2000;
    } else if (TipoAlimento == 3) {
        total = kilo1 * 3000;
    } else {
        total = kilo1 * 4000;
    }
    informe(datosCliente, total)
    
    datosCliente = prompt("Ingrese otro Nombre y Apellido: (ESC para salir)");

} function informe(datosCliente, total) {
    alert("Gracias por su compra: " + datosCliente + "\n" + "El total a pagar es: $" + total);

}
     



    
  

    
    
    
    
            

        

    
