(()=>{

    enum EstadoTarea {
        Pendiente = "pendiente",
        EnProgreso = "en_progreso",
        Completada = "compeltada",
        Cancelada = "cancelada",
      }
      
      // Crear una variable de tipo EstadoTarea
      let estadoActual: EstadoTarea = EstadoTarea.Pendiente;
      
      switch (estadoActual) {
        case EstadoTarea.Pendiente:
          console.log("La tarea está pendiente.");
          break;
        case EstadoTarea.EnProgreso:
          console.log("La tarea está en progreso.");
          break;
        case EstadoTarea.Completada:
          console.log("La tarea está completada.");
          break;
        case EstadoTarea.Cancelada:
          console.log("La tarea está cancelada.");
          break;
        default:
          console.log("Estado de tarea desconocido.");
      }

})()

/* 
🌟⬆️⬆️Las enumeraciones (enums) en TypeScript son una forma de definir un conjunto de constantes con nombres descriptivos. 
Estas constantes se pueden utilizar para representar y manejar valores fijos en tu código. 
Las enumeraciones proporcionan una forma más estructurada y legible de trabajar con valores relacionados.
Las enumeraciones en TypeScript se definen utilizando la palabra clave "enum".
Las enumeraciones en TS son  utiles cuando tienes un conjunto de fijo de valores relacionados como por ejemplo:

  -estados de una tarea
  -roles de usuario
  -tipos de notificaciones
*/