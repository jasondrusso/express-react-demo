import type { StatementSync } from 'node:sqlite';
import { DatabaseSync } from 'node:sqlite';

const dbPath = '../data/sample.sqlite';
console.log("Opening database at " + dbPath);

const db = new DatabaseSync(dbPath, { readOnly: false });

const stmtGetAllUsers = db.prepare('select * from users');
const stmtGetUserById = db.prepare('select * from users where id = ?');
const stmtGetAllProducts = db.prepare('select * from products');
const stmtGetProductsById = db.prepare('select * from products where id = ?');

class UserData {
    public getAllUsers() {
        return runQuery(stmtGetAllUsers, null);
    }

    public getUser(id: number) {
        return runQuery(stmtGetUserById, id);
    }
}

class ProductData {
    public getAllProducts() {
        return runQuery(stmtGetAllProducts, null);
    }

    public getProduct(id: number) {
        return runQuery(stmtGetProductsById, id);
    }
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

export { UserData, ProductData };