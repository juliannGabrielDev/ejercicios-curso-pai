const persona = {
  nombre: "Juliann",
  edad: 21,
  altura: 1.75,
};

const edadFutura = persona.edad + 5;
const altura = 1.75 * 100;

console.log(
  `${persona.nombre} mide ${altura} centimetros,\nen 5 años tendrá ${edadFutura},\ny ${persona.edad >= 18 ? "es mayor de edad" : "no es mayor de edad"}`,
);
