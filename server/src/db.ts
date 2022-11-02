import mysql from "mysql2";

console.log(process.env.DB_PASSWORD);

const dataBase = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "EC004037",
  database: "todograph",
});

const db = (sqlStatement: string, params: any = []): any => {
  return new Promise((resolve, reject) => {
    dataBase.query(sqlStatement, params, (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

export default db;
