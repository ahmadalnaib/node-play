const { Sequelize,QueryTypes } = require('sequelize');

const sequelize = new Sequelize('node', 'root', '', {
  host: '127.0.0.1',
  port: 3306,
  dialect: 'mysql' // or 'mariadb'
});

// Test the connection
// async function testConnection() {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }

// testConnection();


function createTable(lastname,age,car) {
 return sequelize.query(`INSERT INTO users (lastname,age, car) VALUES ('${lastname}','${age}', "${car}")`, { type: QueryTypes.INSERT })
   
}


async function main() {
  await createTable('ahmad',10,'wewe');
  console.log('Table created');
  sequelize.close();
}

main();