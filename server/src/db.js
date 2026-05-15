const mysql = require('mysql2');
const util = require('util');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'jason',
    password: 'russo',
    database: 'example'
});

function listAllUsers() {
    return new Promise((resolve, reject) => {
        pool.query("select * from users", (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });
    });
}

function getUser(id) {
    return new Promise((resolve, reject) => {
        pool.query("select * from users where id = ?", id, (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });
    });
}

exports.listAllUsers = listAllUsers;
exports.getUser = getUser;