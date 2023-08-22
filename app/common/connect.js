const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'khoa_luan_db'
})

connection.connect((err) => {
    if(err){
        console.log("ket noi khong thanh cong!")
    }

})

module.exports = connection