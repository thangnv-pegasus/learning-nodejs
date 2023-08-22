const db = require("../common/connect");

const User = (user) => {
  this.id = user.id;
  this.username = usename;
  this.password = password;
  this.level = level;
};

User.get_account = (username, result) => {
  db.query(`select * from user where username = ${username}`, (err, user) => {
    if (err) {
      result(null);
    } else {
      result(user);
    }
  });
};

User.add_account = (newAccount, result) => {
  db.query(
    `insert into user set username = ?, password = ?, level=?`,
    [newAccount.username, newAccount.password, "student"],
    (err, user) => {
      if (err) {
        result(null);
      } else {
        result(user);
      }
    }
  );
};

User.check_account = (data, result) => {
  console.log([data.username, data.password])
  db.query(
    "select * from user where username = ? and password = ?",
    [data.username, data.password],
    (err, user) => {
      if (err) {
        result(null);
      } else {
        result(user[0]);
      }
    }
  );
};

module.exports = User;
