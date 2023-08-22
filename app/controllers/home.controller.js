exports.home = (req, res) => {
    const data = [
        {
          user: "username_account",
          password: "12345123",
        },
        {
          user: "username_account_1",
          password: "12345123",
        },
      ];
      //   res.sendFile(__dirname + "/test.html");
      return res.send(data);
}