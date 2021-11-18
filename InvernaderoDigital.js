// Bienvenida
var usuario = prompt("Cual es tu nombre?");
alert("¡Hola " + usuario + ", bienvenido al invernadero digital!" + "\n" + "Con la ayuda de este programa podras mantener tus plantas en las condiciones optimas para su desarrollo");
temperatura();

function temperatura() { // Funcion para la temperatura del día
    let i = 0;
    while (i < 4) {
        i = [Math.floor(Math.random() * 25)];
    }
    if (i < 15) {
        alert("Hoy estamos a " + i + "°" + " ¡No olvides cubrir tus plantas del frio!");
    } else {
        alert("Hoy estamos a " + i + "°" + " ¡Tus plantas podrian tener sed mas tarde!");
    }
}
var opcion = prompt("¿Que deseas hacer?" + "\n" + "1. Registrar plantas" + "\n" + "2. Conocer sobre el invernadero" + "\n" + "3. Salir");
switch (opcion) { // Switch para las opciones del usuario
    case "1":
        var x = parseInt(prompt("Ingrese el numero total de plantas que desea registrar "+"\n" +"(Le sugerimos contestar todas las preguntas con minusculas)"));
        for (var i = 0; i < x; i++) {
            var nombre = prompt("Ingrese el nombre de la planta No. " + (i + 1)); 
            var tipo = prompt("Ingrese el tipo de planta " + nombre + " (Solar o Sombra)");
            var cantidad = parseInt(prompt("Ingrese la cantidad de plantas de " + nombre + " que tiene actualemente"));
            var fecha_cosecha = prompt("Ingrese la fecha de cosecha de la planta " + nombre);
            var fecha_ultima_regar = prompt("Ingrese la ultima fecha de riego de la planta " + nombre);
            var fecha_ultima_fertilizar = prompt("Ingrese la ultima fecha de fertilizacion " + nombre);

            var planta = {  //Creacion de objeto planta
                nombre: nombre,
                tipo: tipo,
                cantidad: cantidad,
                fecha_cosecha: fecha_cosecha,
                fecha_ultima_regar: fecha_ultima_regar,
                fecha_ultima_fertilizar: fecha_ultima_fertilizar,
            };
        } 
        alert ("Listo, " + nombre + "acabas de registrar todas tus plantas ¿que deseas hacer ahora?");
var pregunta = prompt("1. Mostrar todos mis cultivos."+ "\n" + "2. Consultar plantas por tipo."+ "\n" + "3. Consultar plantas por nombre."+ "\n" + "4. Consultar fecha de fertilización en especifico.");
switch (pregunta) {
    case "1":
        console.log(planta);
        break;
    case "2":
        var tipo = prompt("Ingrese el tipo de planta que desea consultar");
        for (var i = 0; i < x; i++) {
            if (planta.tipo == tipo) {
                console.log(planta);
            }
        }
        break;
    case "3":
        var nombre = prompt("Ingrese el nombre de la planta que desea consultar");
        for (var i = 0; i < x; i++) {
            if (planta.nombre == nombre) {
                console.log(planta);
            }
        }
        break;
    case "4":
        var fecha_ultima_fertilizar = prompt("Ingrese la fecha de fertilizacion que desea consultar");
        for (var i = 0; i < x; i++) {
            if (planta.fecha_ultima_fertilizar == fecha_ultima_fertilizar) {
                console.log(planta);
            }
        }
        break;

}
break;
    case "2":
        alert("Este invernadero digital fue creado por alumnos del grupo1121IS");
        break;

    case "3":
        salir();
        break;

    default:
        alert("Opcion no valida");
        break;
}