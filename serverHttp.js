const http = require('http');
const server = http.createServer((req, resp) => {
  resp.end('hola server http');
});
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});
