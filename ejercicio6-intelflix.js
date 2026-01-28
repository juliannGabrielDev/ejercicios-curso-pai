const plataforma = {
  nombre: "Intelflix",
  plan: "Premium",
  usuario: {
    nombre: "Julian Gabriel",
    edad: 21,
  },
  perfiles: [
    {
      nombre: "Juliann",
      favoritos: ["Fallout", "Transformer Prime", "Miraculous"],
      historial: ["Miraculous"],
    },
    {
      nommbre: "Sofia",
      favoritos: ["Gossip Girl", "Stranger Things"],
      historial: [],
    },
  ],
};

// 1. Muestra el nombre del usuario principal
console.log(1);
console.log(`Usuario principal: ${plataforma["usuario"].nombre}`);

// 2. Cambia el plan solo si es diferente al actual
console.log(2);
const planActual = plataforma.plan;
const nuevoPlan = "Gratuito";

if (planActual !== nuevoPlan) {
  plataforma.plan = nuevoPlan;
  console.log(`Nuevo plan: ${nuevoPlan}`);
} else {
  console.log("Ya tienes ese plan");
}

// 3. Agrega una serie a favoritos solo si no existe
console.log(3);
const nuevoFavorito = "Miraculous";

if (plataforma.perfiles[0].favoritos.includes(nuevoFavorito)) {
  console.log("Ya está en tus favoritos");
} else {
  plataforma.perfiles[0].favoritos.push(nuevoFavorito);
  console.log(`Nuevo favorito: ${nuevoFavorito}`);
}

// 4. Muestra el historial si no esta vacío
console.log(4);
console.log("Historial:");
for (let historial of plataforma.perfiles[0].historial) {
  if (historial.length > 0) {
    console.log(historial);
  } else {
    console.log("El historial esta vacío");
  }
}

// 5. Muestra un mensaje si el usuario es mayor o menor de edad
console.log(5);
if (plataforma.usuario.edad >= 18) {
  console.log("El usuario principal es mayor de edad");
} else {
  console.log("El usuario no es mayor de edad");
}
