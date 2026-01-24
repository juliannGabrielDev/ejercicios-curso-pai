let saldo = 1000;

const cajero = (opcion, monto) => {
  switch (opcion) {
    case "consultar": {
      console.log(`Saldo disponible: ${saldo}`);
      break;
    }
    case "depositar": {
      if (monto <= 0) {
        console.log("Monto inválido.");
        return;
      }
      saldo += monto;
      console.log(`Depósito exitoso. Nuevo saldo: ${saldo}`);
      break;
    }
    case "retirar": {
      if (monto <= 0) {
        console.log("Monto inválido.");
        return;
      }
      if (monto > saldo) {
        console.log("No hay suficiente saldo.");
        return;
      }
      saldo -= monto;
      console.log(`Retiro exitoso. Nuevo saldo: ${saldo}`);
      break;
    }
  }
};

cajero("consultar");
cajero("depositar", 1000);
cajero("depositar", 0);
cajero("depositar", -20);
cajero("retirar", 2500);
cajero("retirar", 10);
cajero("retirar", -500);
