import type SQLInputValue from 'node:sqlite';
import type { StatementSync } from 'node:sqlite';
import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync('../data/sample.sqlite',
    {
        readOnly: false
    }
);

const stmtGetAllUsers = db.prepare('select * from users');
const stmtGetUserById = db.prepare('select * from users where id = ?');

function listAllUsers() {
    return runQuery(stmtGetAllUsers, null);
}

function getUser(id: number) {
    return runQuery(stmtGetUserById, id);
}

function runQuery(stmt: StatementSync, params: any) {
    if (!db.isOpen) {
        db.open();
    }

    var results: Promise<Record<string, SQLInputValue.SQLOutputValue>> = 
            new Promise((resolve, reject) => {
                stmt.all(params);
                // db.close();
            });

    return results;
}

export { listAllUsers, getUser };