let ticket = {
  id: "TCK-001",
  titulo: "Error en impresora",
  estado: "abierto",
  prioridad: "alta",
  area: "Sistemas",
  fecha: "2024-06-14-10:30:00",
  creador: {
    nombre: "Julian",
    email: "julian.alejandro.gabriel@gmail.com",
  },
  asignados: ["Andres", "Ana"],
  comentarios: [
    { usuario: "Ana", mensaje: "Revisando el equipo" },
    { usuario: "Andres", mensaje: "Falta tóner" },
  ],
};

let { estado, titulo, comentarios } = ticket;

// 1. Muestra el estado del ticket
console.log("1");
console.log(`Título: ${ticket.titulo} - Estado: ${estado}`);

// 2. Cambiar el estado a cerrado solo si esta abierto
console.log("2");
if (ticket["estado"] === "abierto") {
  estado = "cerrado";
  console.log(`Nuevo estado: ${estado}`);
}

// 3. Agregar un comentario solo si el mensaje no esta vacío
console.log("3");
const nuevoComentario = "Hola";

if (nuevoComentario !== "") {
  comentarios.push({
    usuario: "Julian",
    mensaje: nuevoComentario,
  });
  console.log(`Nuevo comentario: ${nuevoComentario}`);
}

// 4. Muestra las personas asignadas solo si hay asignados
console.log("4");
if (ticket.asignados) {
  for (let asignado of ticket.asignados) {
    console.log(asignado);
  }
}

// 5. Cambia la prioridad solo si es válida [alta, media, baja]
console.log("5");
const prioridades = ["alta", "media", "baja"];
const nuevaPrioridad = "Extrema";
if (nuevaPrioridad in prioridades) {
  ticket["prioridad"] = nuevaPrioridad;
  console.log(`Nueva prioridad ${ticket.prioridad}`);
} else {
  console.log(`La prioridad debe ser alguna de: ${prioridades}`);
}

// 6. Verifica si el usuario Ana ya dejó un comentario
console.log("6");
for (let comentario of comentarios) {
  if (comentario.usuario == "Ana") {
    console.log(`Ana ya comentó: ${comentario.mensaje}`);
  } else {
    console.log("Ana no comentó");
  }
}
