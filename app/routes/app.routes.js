const express = require("express");
const { home } = require("../controllers/home.controller");
const { detail } = require("../controllers/detail.controller");
const { add } = require("../controllers/add.controller");
const {
  get_all_product,
  get_id,
  add_product,
  remove_product,
  update_product,
} = require("../controllers/product.controller");
const router = express.Router();
const JWT = require("../common/token");
const { isAuth } = require("../common/authMidleware");

const AppRouter = (app) => {
  

  router.get("/", home);
  router.get("/detail/:id", detail);
  // router.post("/add", add);
  router.get("/get-all", get_all_product);
  router.get("/get-id/:id", get_id);
  router.post("/add-product", add_product);
  router.delete("/remove-product/:id", remove_product);
  router.patch("/update-product", update_product);
  router.get("/token", async (req, res) => {
    const user = {
      username: "account_1",
      password: "123",
    };
    const token = await JWT.make(user);
    res.send({ token });
  });

  router.get("/check-token", async (req, res) => {
    const user = {
      username: "account_1",
      password: "123",
    };
    const token = await JWT.make(user);
    const data = await JWT.check(token);
    res.send({ data });
  });

  app.use("/", router);

  app.use("/detail/:id", router);
  app.use("/get-all", router);

  app.use("/get-id/:id", router);
  app.use("/add-product", router);
  app.use("/remove-product/:id", router);
  app.use("/update-product", router);

  app.use("/token", router);
  app.get("/check-token", isAuth);
  app.use("/check-token", router);
  // app.use("/add", router);

  require("../routes/user.router")(app);
};

module.exports = AppRouter;
