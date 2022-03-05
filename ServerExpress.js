const express = require('express');
const fs = require('fs');
const app = express();

/** Leo  el archivo */
async function leer() {
  try {
    const data = await fs.promises.readFile('./productos.txt', 'utf-8');
    const objData = JSON.parse(data);
    return objData;
  } catch (error) {
    console.log('error de lectura', error);
  }
}

app.get('/', (req, resp) => {
  resp.send('<h1>hola server express</h1>');
});
app.get('/objeto', (req, resp) => {
  resp.json({ name: 'isaias', años: 26 });
});
app.get('/productos', (req, resp) => {
  leer().then((r) => {
    // eslint-disable-next-line max-len
    resp.json(r); // "r" es un array de objetos parseados previamente en la funcion leer por algun motivo
    // el parser no me funciona pero en teoria es asi
  });
});
app.get('/productoRandom', (req, resp) => {
  leer().then((r) => {
    const num = Math.floor(Math.random() * 3);
    // eslint-disable-next-line max-len
    resp.json(JSON.parse(r[num])); // aqui obtengo un indice aleatorio para seleccionar un objeto del array
  });
});

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Server escuchando en puerto ${PORT}, http://localhost:${PORT}`);
});
server.on('error', (error) => console.log(error));
