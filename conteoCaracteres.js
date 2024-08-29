//  Examen Práctico de Diagnóstico Agosto - Diciembre 2024 
//  Sánchez Tovar Jesús Alfredo

//  Conteo de caracteres: Dada una cadena de texto y luego muestra el número de caracteres que 
//  contiene esa cadena.

    let cadenaTexto = "Sánchez Tovar Jesús Alfredo"
    let contador = 0;


    cadenaTexto = cadenaTexto.trim();
    // Recorrer la cadena
    for (let i = 0; i < cadenaTexto.length; i++) {
        contador =+ (i+1);
    }   

    // Resultado
    console.log ("\n Se leyó un total de [ " + (contador) + " ] caracteres. " +
                 "\n Se tomarón en cuenta los espacios")



// Suma de elementos de un arreglo: Crea un arreglo de números y calcula la suma de todos sus elementos.
// Filtrado de elementos en un arreglo: Crea un arreglo de números y filtra los elementos para mostrar solo aquellos que sean mayores que un valor dado por el usuario.
// Concatenación de arreglos: Crea dos arreglos de strings y luego concatenarlos en un solo arreglo.
// Búsqueda de elementos en un arreglo: Crea un arreglo de nombres y dada una cadena con un nombre,  verifica si ese nombre está presente en el arreglo y muestra un mensaje apropiado.


// Desarrollar un servidor web utilizando Express que proporcione una API REST para gestionar una lista de tareas pendientes (To-Do List). La API deberá permitir realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre las tareas, así como calcular estadísticas sobre las mismas.

// Requisitos del ejercicio:
// Crear un servidor web utilizando Express.
// Definir rutas para las siguientes operaciones CRUD sobre las tareas:
// Crear una nueva tarea.
// Leer todas las tareas.
// Leer una tarea específica por su ID.
// Actualizar una tarea existente.
// Eliminar una tarea por su ID.
// Implementar una funcionalidad adicional para calcular estadísticas sobre las tareas, como:
// Cantidad total de tareas.
// Tarea más reciente (fecha de creación más reciente).
// Tarea más antigua (fecha de creación más antigua).
// Cantidad de tareas completadas y pendientes.
// Utilizar estructuras de datos simples (p. ej., arrays, objetos) para almacenar las tareas en memoria en lugar de una base de datos real.
// Implementar manejo de errores para casos como solicitudes inválidas o tareas que no existen.
// Probar la API utilizando herramientas como Postman, Insomnia, etc. para asegurarse de que todas las operaciones CRUD y el cálculo de estadísticas funcionen correctamente.

