import http from "http";

import app from "./app";

const server = http.createServer(app);

const PORT = process.env.NODE || 5000;

server.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
