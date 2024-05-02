const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const colores = [
  "#FF0000", // Rojo
  "#00FF00", // Verde
  "#0000FF", // Azul
  "#FFFF00", // Amarillo
  "#FF00FF", // Magenta
  "#00FFFF", // Cian
  "#800000", // Marrón
  "#008000", // Verde oscuro
  "#000080", // Azul oscuro
  "#FFA500", // Naranja
  "#A52A2A", // Marrón oscuro
  "#808000", // Oliva
  "#008080", // Verde azulado
  "#800080", // Púrpura
  "#FF6347", // Rojo coral
  "#FFD700", // Oro
  "#B22222", // Rojo fuego
  "#9ACD32", // Verde lima
  "#FF69B4", // Rosa intenso
  "#4682B4", // Azul acero
  "#8A2BE2", // Azul violeta
];

let generarMatrizConColores = (size, numColoreadas) => {
  let matriz = [];
  let coordenadasColoreadas = [];
  for (let x = 0; x < size; x++) {
    matriz[x] = [];
    for (let y = 0; y < size; y++) {
      matriz[x][y] = "";
    }
  }

  for (let i = 0; i < numColoreadas; i++) {
    let fila, columna;
    do {
      fila = Math.floor(Math.random() * size);
      columna = Math.floor(Math.random() * size);
    } while (
      coordenadasColoreadas.some(
        (coord) => coord.fila === fila && coord.columna === columna
      )
    );

    coordenadasColoreadas.push({ fila, columna, color: colores[i] }); 
  }
  return { matriz, coordenadasColoreadas };
};

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

app.get("/matriz-aleatoria", (req, res) => {
  const { matriz, coordenadasColoreadas } = generarMatrizConColores(6, 7);
  console.log({ matriz, coordenadasColoreadas });
  res.json({ matriz, coordenadasColoreadas });
});

// Escuchar en un puerto específico
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
