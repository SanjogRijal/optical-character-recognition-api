import defaultService from "./main-service.js";

async function defaultController(req, res) {
  res.send(await defaultService());
}

export default defaultController;