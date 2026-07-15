import type { StatementSync } from 'node:sqlite';
import { DatabaseSync } from 'node:sqlite';

const dbPath = '../data/sample.sqlite';
console.log("Opening database at " + dbPath);

const db = new DatabaseSync(dbPath, { readOnly: false });

const stmtGetAllUsers = db.prepare('select * from users');
const stmtGetUserById = db.prepare('select * from users where id = ?');
const stmtGetAllProducts = db.prepare('select * from products');
const stmtGetProductsById = db.prepare('select * from products where id = ?');

function getAllUsers() {
    return runQuery(stmtGetAllUsers, null);
}

function getUser(id: number) {
    return runQuery(stmtGetUserById, id);
}

function getAllProducts() {
    return runQuery(stmtGetAllProducts, null);
}

function getProduct(id: number) {
    return runQuery(stmtGetProductsById, id);
}

function runQuery(stmt: StatementSync, params: any) {
    if (!db.isOpen) {
        db.open();
    }

    return new Promise((resolve, reject) => {
        try {
            if (params)
                resolve(stmt.all(params));
            else
                resolve(stmt.all());
        } catch (err) {
            reject(err);
        }
    });
}

export { getAllUsers, getUser, getAllProducts, getProduct };