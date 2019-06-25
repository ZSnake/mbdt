const hapi = require('@hapi/hapi');
const routes = require('./src/routes');
const server = hapi.server({
  port: 3000,
  host: 'localhost',
});
const init = async () => {

  routes.forEach((route) => server.route(route));
  await server.start();
  console.log(`Server running at ${server.info.uri}`);
}

init();