const db = require("../common/connect");

const Product = (product) => {
  this.id = product.id;
  this.name = product.name;
  this.password = product.password;
  this.level = product.level;
};

Product.get_all = (result) => {
  const data = [
    {
      id: 1,
      name: "sweater",
    },
    {
      id: 2,
      name: "jacket",
    },
    {
      id: 3,
      name: "Shirt",
    },
    {
      id: 4,
      name: "hoodie",
    },
  ];

  db.query("select * from user", (err, product) => {
    if (err) {
      result("");
    } else {
      console.log(product);
      result(product);
    }
  });
};

Product.getId = (id, result) => {
  const data = [
    {
      id: 1,
      name: "sweater",
    },
    {
      id: 2,
      name: "jacket",
    },
    {
      id: 3,
      name: "Shirt",
    },
    {
      id: 4,
      name: "hoodie",
    },
  ];
  db.query(`select * from user where id = ${id}`, (err, product) => {
    if (err) {
      result(null);
    } else {
      result(product);
    }
  });
};

Product.add_product = (data, result) => {
  const newData = { ...data, level: "student" };
  db.query(`insert into user set ?`, newData, (err, product) => {
    if (err) {
      result(null);
    } else {
      result(product);
    }
  });
};

Product.remove_product = (id, result) => {
  db.query(`DELETE FROM user WHERE id=${id}`, (err, product) => {
    if (err) {
      result(`xoa user ${id} that bai`);
    } else {
      result(`xoa user ${id} thanh cong!`);
    }
  });
};

Product.update_product = (user, result) => {
  db.query(`UPDATE user SET username=?, password=? WHERE id=${user.id}`,[user.username,user.password],(err, product) => {
    if(err){
      result(`update user ${user.id} that bai!`)
    }else{
      result(`update user ${user.id} thanh cong!`)
    }
  });
};

module.exports = Product;
