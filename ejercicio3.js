const alumno = {
  nombre: "Julian",
  semestre: 6,
  calificacion1: 90,
  calificacion2: 95,
  calificacion3: 100,
};

const promedio =
  (alumno.calificacion1 + alumno.calificacion2 + alumno.calificacion3) / 3;
const estaAprobado = promedio >= 60;

console.log(
  `Promedio: ${promedio}, ${estaAprobado ? "Aprobado" : "No aprobado"}`,
);
