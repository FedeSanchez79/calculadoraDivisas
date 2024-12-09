let acceso = prompt("Desea realizar una operación de COMPRA/VENTA de divisas extranjeras con pesos Argentinos? SI/NO")
let ingreso = ["si", "no"]
let otraOpcion = ingreso.push("Programa iniciando", "Programa finalizado")
alert(ingreso[2])

while (acceso == ingreso[0]) {
     
    let menu1 = prompt("Por favor seleccione un número: \n" + "1.- Comprar divisas \n" + "2.- Vender divisas \n" + "3.- Salir del menu")  
    
    function menuDivisas(articulo, opcion, mensaje){

        let menu2 = prompt("Por favor seleccione un número para indicar con que divisa desea operar: \n" + "1.- Dolares \n" + "2.- Euros \n" + "3.- Reales \n" + "4.- Pesos Chilenos \n" + "5.- Pesos Uruguayos \n")
        
        if (menu2 == 1 || menu2 == 2 || menu2 == 3 || menu2 == 4 || menu2 == 5){
            do {
                const cotizaciones = {
                    1: { nombre: "dolares", cotizacion: 1080 },
                    2: { nombre: "euros", cotizacion: 1029 },
                    3: { nombre: "reales", cotizacion: 170 },
                    4: { nombre: "pesos Chilenos", cotizacion: 100 },
                    5: { nombre: "pesos Uruguayos", cotizacion: 23 },
                  }

    
                  switch(menu2){
                    case 1:
                        alert(`Usted selecciono operar con ${cotizaciones.nombre}`)               
                    case 2:
                        alert(`Usted selecciono operar con ${cotizaciones.nombre}`)
                    case 3:
                        alert(`Usted selecciono operar con ${cotizaciones.nombre}`)
                    case 4:
                        alert(`Usted selecciono operar con ${cotizaciones.nombre}`)
                    case 5:
                        alert(`Usted selecciono operar con ${cotizaciones.nombre}`)
                    default:
                        break           
                    }
    
                    let cantidad = parseFloat(prompt("Indique la cantidad que desea " + opcion + ": "))
    
                    function calculadora(monto, cotizacion, moneda){
                        alert (articulo + opcion + ` ${cantidad} ` + moneda +  mensaje + " " + monto*cotizacion + " pesos Argentinos")
                    } 
    
                    let divisaSeleccionada = cotizaciones[menu2];
    
                    if (divisaSeleccionada) { 
                        calculadora(cantidad, divisaSeleccionada.cotizacion, divisaSeleccionada.nombre);
                    }else{
                        alert("Vuelva a ingresar una opción válida");
                    }
    
            }while(menu2 = 0 || menu2 > 5)
        }else 
            alert("Opción no válida")
    
    }

    if (menu1 == 1){
        alert("Usted seleccionó COMPRAR divisas")
            
            menuDivisas("Para ", "comprar", " usted necesita cambiar:")

    }else if (menu1 == 2) {

        alert("Usted seleccionó VENDER divisas")
        
            menuDivisas("Al ", "vender", " usted recibirá:")

    }else {
            alert("Gracias por utilizar nuestros servicios")  
            break    
        }    
    }
    alert(ingreso[3])
