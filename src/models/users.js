const dbPool = require("../config/database");

const getAllUsers = () => {
  const sqlQuery = "SELECT * FROM users";

  return dbPool.execute(sqlQuery);
};

const createNewUser = (body) => {
  const sqlQuery = `    INSERT INTO users (name,email,address) 
                        VALUES ('${body.name}','${body.email}','${body.address}')`;

  return dbPool.execute(sqlQuery);
};

const updateUser = (body, idUser) => {
  const sqlQuery = `    UPDATE users SET name='${body.name}',email='${body.email}',address='${body.address}' 
                        WHERE id = ${idUser}`;

  return dbPool.execute(sqlQuery);
};

const deleteUser = (idUser) => {
  const sqlQuery = `DELETE FROM users WHERE id=${idUser}`;

  return dbPool.execute(sqlQuery);
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
