// dbOperations.js
import pkg from 'mssql';

const { connect, query } = pkg;

export function connectToDatabase(config) {
  return connect(config);
}

export function addDataToDatabase(name, id) {
  const sqlQuery = `INSERT INTO DEMO (addName, addID) VALUES ('${addName}', '${addId}')`;
  return query(sqlQuery);
}
