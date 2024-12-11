// CALCULADORA DE DIVISAS Y CODIGOS DE TRANSFERENCIA BANCARIOS

const ingresos = ["si", "no"]

let acceso = prompt("$MART CLICK: \n" + "Desea realizar una operación de COMPRA/VENTA de divisas extranjeras con pesos argentinos? SI/NO")

if(acceso !== ingresos[0] && acceso !== ingresos[1]){
    alert("Opción no válida")
}

while (acceso == ingresos[0]) {
     
    let menuPrincipal = parseInt(prompt("MENU PRINCIPAL: \n" + "Por favor seleccione un número: \n" + "1.- Comprar divisas \n" + "2.- Vender divisas \n" + "3.- Salir del menú"))
    
    function menuDivisas(articulo, opcion, mensaje){

        let menuMoneda = parseInt(prompt("MENU DIVISAS: \n" + "Por favor seleccione un número para indicar con que divisa desea operar: \n" + "1.- Dólares \n" + "2.- Euros \n" + "3.- Reales \n" + "4.- Pesos Chilenos \n" + "5.- Pesos Uruguayos"))
        
        if (menuMoneda >= 1 && menuMoneda <= 5){

            do {

                const nombreDivisas = ["dólares", "euros", "reales", "pesos chilenos", "pesos uruguayos"]

                //MUCHOS CASE, VER SI CON OBJETO SE PUEDE REDUCIR

                switch(menuMoneda){
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
                        alert("Opción no válida, regresando al Menú Principal")
                        break         
                    }
    
                let cantidad = parseFloat(prompt("Indique la cantidad que desea " + opcion + ": "))

                if(isNaN(cantidad)){
                    alert("Opción no válida, por favor seleccione NO en el siguiente menú")
                    break
                }

                function calculadoraDivisas(monto, cotizacion, moneda){
                    alert (articulo + opcion + ` ${cantidad} ` + moneda +  mensaje + " " + monto*cotizacion + " pesos argentinos")
                } 

                const cotizacion = [1100, 1030, 171, 101, 24]

                //MUCHOS CASE, VER SI CON OBJETO SE PUEDE REDUCIR

                switch(menuMoneda){
                    case 1:
                        calculadoraDivisas(cantidad, cotizacion[0], nombreDivisas[0]) 
                        break            
                    case 2:
                        calculadoraDivisas(cantidad, cotizacion[1], nombreDivisas[1]) 
                        break
                    case 3:
                        calculadoraDivisas(cantidad, cotizacion[2], nombreDivisas[2]) 
                        break
                    case 4:
                        calculadoraDivisas(cantidad, cotizacion[3], nombreDivisas[3]) 
                        break
                    case 5:
                        calculadoraDivisas(cantidad, cotizacion[4], nombreDivisas[4]) 
                        break           
                    }
    
            }while(menuMoneda == 0 && menuMoneda > 5)

        }else if(isNaN(menuMoneda) || menuMoneda == 0 || menuMoneda > 5){
            alert("Opción no válida, por favor seleccione NO en el próximo menú")
            return
        }   
    }

    function bancos(){

        let transferencia = prompt("Desea transferir el monto a un banco? SI/NO")

        if (transferencia == ingresos[0]){

           let banco = parseInt(prompt("MENU BANCOS: \n" + "Por favor seleccione un número para indicar con que banco desea operar: \n" + "1.- Banco de la Nación Argentina \n" + "2.- Banco de la Provincia de Buenos Aires \n" + "3.- Banco de la Ciudad de Buenos Aires \n" + "4.- Banco Galicia \n" + "5.- Banco BBVA \n" + "6.- Banco Hipotecario \n" + "7.- Banco del Chubut \n" + "8.- Banco Columbia \n" + "9.- Banco Entre Ríos \n" + "10.- Banco Comafi \n" + "11.- ICBC Argentina \n" + "12.- Banco Macro \n" + "13.- Nuevo Banco Santa Fe \n" + "14.- Banco Patagonia \n" + "15.- Banco Santiago del Estero \n" + "16.- Banco Superville"))
           
            while (banco >= 1 && banco <= 16){

                const codigoBancos = ["00011", "00014", "00029", "00007", "00017", "00044", "00083", "00389", "00386", "00299", "00131", "00285", "00330", "00034", "00321", "00027"]

                const bancos = ["banco nación", "banco provincia", "banco ciudad", "banco galicia", "banco bbva", "banco hipotecario", "banco chubut", "banco columbia", "banco entre ríos", "banco comafi", "icbc argentina", "banco macro", "nuevo banco santa fe", "banco patagonia", "banco santiago del estero", "banco superville"]

                function codigoBanco(nombre, codigo){
                alert("Usted seleccionó transferir al " + nombre + "\n" + "Recuerde que su codigo bancario, para realizar una transferencia, es " + codigo)
                }

                //MUCHOS CASE, VER SI CON OBJETO SE PUEDE REDUCIR

                    switch(banco){
                        case 1:
                            codigoBanco(bancos[0], codigoBancos[0])
                            break
                        case 2:
                            codigoBanco(bancos[1], codigoBancos[1])
                            break
                        case 3:
                            codigoBanco(bancos[2], codigoBancos[2])
                            break
                        case 4:
                            codigoBanco(bancos[3], codigoBancos[3])
                            break
                        case 5:
                            codigoBanco(bancos[4], codigoBancos[4])
                            break
                        case 6:
                            codigoBanco(bancos[5], codigoBancos[5])
                            break
                        case 7:
                            codigoBanco(bancos[6], codigoBancos[6])
                            break
                        case 8:
                            codigoBanco(bancos[7], codigoBancos[7])
                            break
                        case 9:
                            codigoBanco(bancos[8], codigoBancos[8])
                            break
                        case 10:
                            codigoBanco(bancos[9], codigoBancos[9])
                            break
                        case 11:
                            codigoBanco(bancos[10], codigoBancos[10])
                            break
                        case 12:
                            codigoBanco(bancos[11], codigoBancos[11])
                            break
                        case 13:
                            codigoBanco(bancos[12], codigoBancos[12])
                            break
                        case 14:
                            codigoBanco(bancos[13], codigoBancos[13])
                            break
                        case 15:
                            codigoBanco(bancos[14], codigoBancos[14])
                            break
                        case 16:
                            codigoBanco(bancos[15], codigoBancos[15])
                            break
                    }

                break    
           }
           
           alert("Regresando al Menú Principal")

        }else if(transferencia == ingresos[1]){
            alert("Regresando al Menú Principal")
        }else {
            alert("Opción no válida, regresando al Menú Principal")
        }
    }

    if (menuPrincipal == 1){
        alert("Usted seleccionó COMPRAR divisas")
            
            menuDivisas("Para ", "comprar", " usted necesita cambiar:")

            bancos()

    }else if (menuPrincipal == 2) {

        alert("Usted seleccionó VENDER divisas")
        
            menuDivisas("Al ", "vender", " usted recibirá:")

            bancos()

    }else {  
        break    
    }    
}
alert("Gracias por utilizar nuestros servicios \n" + "PROGRAMA FINALIZADO" )

let pusheandoMenuPrincipal = ingresos.push("para reiniciar F5 (Win), o Comando + R (Mac)")

alert(ingresos[2])
