import async from 'async';
import mysql from 'mysql';
import path from 'path';

require('dotenv').config({
  path: path.resolve(__dirname, '../../.env'),
});
const config = process.env;

const poolConfig = {
  host: config.DB_HOST,
  port: config.DB_PORT,
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
};

console.log('setting:' + JSON.stringify(poolConfig));

var Pool = function Pool() {
  var test = 0;
  var pool;
  var connection;

  this.init = function (callback) {
    if (pool == undefined) {
      pool = mysql.createPool(poolConfig);
      console.log('pool initialization completed.');
    }
    this.query('SELECT 1', [], callback);
  };

  this.addTest = function () {
    test++;
  };
  this.printTest = function () {
    console.log(test);
  };

  this.query = function (queryString, values, callback) {
    return new Promise((resolve, reject) => {
      async.waterfall(
        [
          function (callback_wf) {
            pool.getConnection(callback_wf);
          }, // this will call callback_wf function w/ (err, connection) arguments.
          function (newConnection, callback_wf) {
            console.log('query string:' + queryString);
            console.log('query values:' + JSON.stringify(values));
            //                    connection = newConnection;
            newConnection.query(queryString, values, function (err, results) {
              callback_wf(err, results, newConnection);
            });
          },
        ],
        function (err, rows, newConnection) {

          if (newConnection)
            newConnection.release();
          else 
            console.log("[Warning] newConnection IS NOT GIVEN! No connection to release!")

          if (err) {
            if (!callback) {
              reject(err);
              return;
            }
            callback(err);
            return;
          }
          if (!callback) {
            resolve(rows);
            return;
          }
          callback(null, rows);
        },
      );
    });
  };
};

Pool.instance = null;
/**
 * Singleton getInstance definition
 * @return singleton class
 */
Pool.getInstance = function () {
  if (this.instance === null) {
    this.instance = new Pool();
  }
  return this.instance;
};

module.exports = Pool.getInstance();
