const inputField = document.getElementById("input-temp");
const fromUnitField = document.getElementById("input-unit");
const toUnitField = document.getElementById("output-unit");
const outputField = document.getElementById("output-temp");
const form = document.getElementById("converter");

console.log("roberto david jimenez posada");

function converterTemp(value, fromUnit, toUnit){
    if(fromUnit === 'c'){
        //LA UNIDAD DE ORIGEN ES CELSIUS
        if(toUnit === 'f'){
            //LA UNIDAD DE DESTINO ES FARENHEIT
            return (value * 9/5) + 32;
        }else if(toUnit === 'k'){
            //LA UNIDAD DE DESTINO ES KELVIN
            return value + 273.15;
        }else{
            // NO HA SELECCIONADO UN TIPO DE DESTINO
            return value;
        }
    }

    if(fromUnit ==='f'){
        //LA UNIDAD DE ORIGEN ES FARENHEIT
        if(toUnit === 'c'){
            //LA UNIDAD DE DESTINO ES CELSIUS
            return (value - 32) * (5 / 9);
        } else if (toUnit === 'k'){
            //LA UNIDAD DE DESTINO ES KELVIN
            return (value + 459.67) * (5 / 9);
        }else{
            //NO HA SELECCIONADO UN TIPO DE DESTINO
            return value;
        }
    }

    if(fromUnit === 'k'){
        //LA UNIDAD DE ORIGEN ES KELVIN
        if(toUnit === 'c'){
            //LA UNIDAD DE DESTINO ES CELSIUS
            return value - 273.15;
        } else if (toUnit === 'f'){
            //LA UNIDAD DE DESTINO ES FARENHEITT
            return (value * (9 / 5)) - 459.67;
        }else{
            //NO HA SELECCIONADO NINGUN TIPO DE DESTINO
            return value;
        }
    }

    //NO ENTRO A NINGUNA VALIDACIÓN (if), POR LO TANTO SE DEVUELVE UNA EXCEPCIÓN
    throw new Error('Unidad de medida inválida');

}

form.addEventListener('input' , ()=>{
    const inputTemp = parseFloat(inputField.value);// VALOR DIGITADO POR EL USUARIO EN EL CAMPO INPUT
    const fromUnit = fromUnitField.value;// VALOR SELECCIONADO POR EL USUARIO (UNIDAD DE MEDIDA DE ORIGEN)
    const toUnit = toUnitField.value; //VALOR SELECCIONADO POR EL USUARIO (UNIDAD DE MEDIDA DE DESTINO)

    const outputTemp = converterTemp(inputTemp,fromUnit, toUnit); //CALCULO DE VALORES, CONVERSION DE VALORES
    outputField.value = (Math.round(outputTemp * 100) / 100) + ' ' + toUnit.toUpperCase();

})

