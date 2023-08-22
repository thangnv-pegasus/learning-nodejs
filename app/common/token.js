const jwt = require("jsonwebtoken");
const app = require("./app");
const ACCESS_TOKEN = app.ACCESS_TOKEN;
const TIME_LINE_TOKEN = app.TIME_LINE_TOKEN;

/*
    phuong thuc:
    make => tao ma token
    check => xac thuc ma token dung-sai, het han
*/

const make = (user) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { data: user },
      ACCESS_TOKEN,
      {
        algorithm: "HS256",
        expiresIn: TIME_LINE_TOKEN,
      },
      (err, token) => {
        if (err) {
          return reject(err);
        } else {
          resolve(token);
        }
      }
    );
  });
};

const check = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, ACCESS_TOKEN, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

module.exports = { make, check };
