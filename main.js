let acceso = prompt("Desea realizar una operación? SI/NO")
let ingreso = "si"

while (acceso == ingreso) {

    let menu1 = prompt("Por favor seleccione un número: \n" + "1.- Comprar divisas \n" + "2.- Vender divisas \n" + "3.- Salir del menu")

    if (menu1 == 1){
        alert("Usted seleccionó COMPRAR divisas")

        function menuDivisasCompra(){

            let menu2 = prompt("Por favor seleccione un número para indicar con que divisa desea operar: \n" + "1.- Dolares \n" + "2.- Euros \n" + "3.- Reales \n" + "4.- Pesos Chilenos \n" + "5.- Pesos Uruguayos \n")
            
            let dolares = "Dolares"
            let euros = "Euros"
            let reales = "Reales"
            let pesosChi = "Pesos Chilenos"
            let pesosUru = "Pesos Uruguayos"

            switch(menu2){
                case 1:
                    alert(`Usted selecciono operar con ${dolares}`)               
                case 2:
                    alert(`Usted selecciono operar con ${euros}`)
                case 3:
                    alert(`Usted selecciono operar con ${reales}`)
                case 4:
                    alert(`Usted selecciono operar con ${pesosChi}`)
                case 5:
                    alert(`Usted selecciono operar con ${pesosUru}`)   
            }
            
            let cantidad = parseFloat(prompt("Indique la cantidad que desea comprar: "))

            function calculadora(monto, cotizacion, moneda){
                alert (`Para comprar ${cantidad} ` + moneda +  "usted necesita cambiar: " + monto*cotizacion + " Pesos Argentinos")
            } 

                if (menu2 == 1){
                    calculadora(cantidad, 1080, dolares) 
                }else if (menu2 == 2){
                    calculadora(cantidad, 1029, euros) 
                }else if(menu2 == 3){
                    calculadora(cantidad, 170, reales) 
                }else if(menu2 == 4){
                    calculadora(cantidad, 100, pesosChi) 
                }else if(menu2 == 5){
                    calculadora(cantidad, 23, pesosUru) 
                }else{
                    alert("Vuelva a ingresar una opción válida")
                }
            }

            menuDivisasCompra()

    }else if (menu1 == 2) {
        alert("Usted seleccionó VENDER divisas")

        function menuDivisasVender(){

            let menu2 = prompt("Por favor seleccione un número para indicar con que divisa desea operar: \n" + "1.- Dolares \n" + "2.- Euros \n" + "3.- Reales \n" + "4.- Pesos Chilenos \n" + "5.- Pesos Uruguayos \n" + "6.- Salir")
            
            let dolares = "Dolares"
            let euros = "Euros"
            let reales = "Reales"
            let pesosChi = "Pesos Chilenos"
            let pesosUru = "Pesos Uruguayos"

            switch(menu2){
                case 1:
                    alert(`Usted selecciono operar con ${dolares}`)               
                case 2:
                    alert(`Usted selecciono operar con ${euros}`)
                case 3:
                    alert(`Usted selecciono operar con ${reales}`)
                case 4:
                    alert(`Usted selecciono operar con ${pesosChi}`)
                case 5:
                    alert(`Usted selecciono operar con ${pesosUru}`)
                case 6:
                    alert("Usted selecciono VOLVER")    
            }
            
            let cantidad = parseFloat(prompt("Indique la cantidad que desea vender: "))

            function calculadora(monto, cotizacion, moneda){
                alert (`Por vender ${cantidad}`  + moneda +  "usted recibirá: " + monto*cotizacion + " Pesos Argentinos")
            } 

                if (menu2 == 1){
                    calculadora(cantidad, 1100, dolares) 
                }else if (menu2 == 2){
                    calculadora(cantidad, 1035, euros) 
                }else if(menu2 == 3){
                    calculadora(cantidad, 171, reales) 
                }else if(menu2 == 4){
                    calculadora(cantidad, 101, pesosChi) 
                }else if(menu2 == 5){
                    calculadora(cantidad, 24, pesosUru) 
                }else if(menu == 6){
                    alert("Regresamos al menu anterior")
                }
                else{
                    alert("Opción no válida")
                }
            }

            menuDivisasVender()
        
    }else {
        alert("Gracias por utilizar nuestros servicios")
        break      
    }
}

alert("Programa finalizado")