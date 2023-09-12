
// const jsonServer = require("json-server");
// const server = jsonServer.create();
// const middlewares = jsonServer.defaults();



// const port = process.env.PORT || 8080;
// server.use(middlewares);

// // JSON Server Routers
// const router1 = jsonServer.router("companyDetails.json");
// const router2 = jsonServer.router("otherData.json");
// const router3 = jsonServer.router("hr&CompanyContainer.json");

// server.use("/api", router1);
// server.use("/api2", router2);
// server.use("/hrAndCompany", router3);

// server.listen(port);


const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("travelRequest.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
