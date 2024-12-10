let acceso = prompt("Desea realizar una operación de COMPRA/VENTA de divisas extranjeras con pesos Argentinos? SI/NO")
const ingresos = ["si", "no"]

while (acceso == ingresos[0]) {
     
    let menu1 = parseInt(prompt("Por favor seleccione un número: \n" + "1.- Comprar divisas \n" + "2.- Vender divisas \n" + "3.- Salir del menu"))
    
    function menuDivisas(articulo, opcion, mensaje){

        let menu2 = parseInt(prompt("Por favor seleccione un número para indicar con que divisa desea operar: \n" + "1.- Dolares \n" + "2.- Euros \n" + "3.- Reales \n" + "4.- Pesos Chilenos \n" + "5.- Pesos Uruguayos"))
        
        if (menu2 >= 1 && menu2 <= 5){
            do {

                const nombreDivisas = ["dolares", "euros", "reales", "pesos chilenos", "pesos uruguayos"]
    
                  switch(menu2){
                    case 1:
                        alert(`Usted seleccionó operar con ` + nombreDivisas[0]) 
                        break            
                    case 2:
                        alert(`Usted seleccionó operar con ` + nombreDivisas[1])
                        break
                    case 3:
                        alert(`Usted seleccionó operar con ` + nombreDivisas[2])
                        break
                    case 4:
                        alert(`Usted seleccionó operar con ` + nombreDivisas[3])
                        break
                    case 5:
                        alert(`Usted seleccionó operar con ` + nombreDivisas[4])
                        break
                    default:
                        alert("Opción inválida")
                        return          
                    }
    
                    let cantidad = parseFloat(prompt("Indique la cantidad que desea " + opcion + ": "))
                    function calculadora(monto, cotizacion, moneda){
                        alert (articulo + opcion + ` ${cantidad} ` + moneda +  mensaje + " " + monto*cotizacion + " pesos Argentinos")
                    } 

                    switch(menu2){
                        case 1:
                            let cotizacionDolar = 1100 
                            calculadora(cantidad, cotizacionDolar, nombreDivisas[0]) 
                            break            
                        case 2:
                            let cotizacionEuro = 1030
                            calculadora(cantidad, cotizacionEuro, nombreDivisas[1]) 
                            break
                        case 3:
                            let cotizacionReal = 171
                            calculadora(cantidad, cotizacionReal, nombreDivisas[2]) 
                            break
                        case 4:
                            let cotizacionPesoChi = 101
                            calculadora(cantidad, cotizacionPesoChi, nombreDivisas[3]) 
                            break
                        case 5:
                            let cotizacionPesoUru = 24
                            calculadora(cantidad, cotizacionPesoUru, nombreDivisas[4]) 
                            break
                        default:
                            break           
                        }
    
            }while(menu2 == 0 || menu2 > 5)
        }else 
            alert("Opción no válida")  
            return  
    }

    if (menu1 == 1){
        alert("Usted seleccionó COMPRAR divisas")
            
            menuDivisas("Para ", "comprar", " usted necesita cambiar:")

    }else if (menu1 == 2) {

        alert("Usted seleccionó VENDER divisas")
        
            menuDivisas("Al ", "vender", " usted recibirá:")

            let transferencia = prompt("Desea transferir el monto a un banco? SI/NO")

            if (transferencia == ingresos[0]){
               let banco = parseInt(prompt("Por favor seleccione un número para indicar con que Banco desea operar: \n" + "1.- Banco de la Nación Argentina \n" + "2.- Banco de la Provincia de Buenos Aires \n" + "3.- Banco de la Ciudad de Buenos Aires \n" + "4.- Banco Galicia \n" + "5.- Banco BBVA \n" + "6.- Banco Hipotecario \n" + "7.- Banco del Chubut \n" + "8.- Banco Columbia \n" + "9.- Banco Entre Rios \n" + "10.- Banco Comafi \n" + "11.- ICBC Argentina \n" + "12.- Banco Macro \n" + "13.- Nuevo Banco Santa Fe \n" + "14.- Banco Patagonia \n" + "15.- Banco Santiago del Estero \n" + "16.- Banco Superville \n"))
                
            }


    }else {  
            break    
        }    
    }
    alert("Gracias por utilizar nuestros servicios")
    let otraOpcion = ingresos.push("programa finalizado")
    alert(ingresos[2])
