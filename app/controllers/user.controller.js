const User = require("../models/user.model");
const JWT = require("../common/token");
exports.get_account_user = (req, res) => {};

exports.check_account_user = (req, res) => {
  const data = req.body;

  User.check_account(data, async (response) => {
    if (response) {
      const user_token = await JWT.make(response);
      res.send({ result: response, user_token, status: true });
    } else {
      res.send({ result: null, status: false });
    }
  });
};

exports.add_account_user = (req, res) => {
  const data = req.body;
  User.add_account(data, (response) => {
    if (response) {
      res.send({ result: response, status: true });
    } else {
      res.send({ result: null, status: false });
    }
  });
};
