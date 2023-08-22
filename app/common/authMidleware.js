const isAuth = async (req, res, next) => {
  const JWT = require("./token");
  const token = req.headers.authorization;

  if (token) {
    try {
      const authData = await JWT.check(token);

      req.auth = authData;
      console.log('token dung')
      next();
    } catch (err) {
      console.log("Token khong hop le");
    }
  } else {
    return res.send("Chua co token");
  }
};

module.exports = {
  isAuth,
};
