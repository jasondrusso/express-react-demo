const db = require('../../src/db/mysqldb');

describe("MySql test suite", function() {
    it("Test listAllUsers() method.", function() {
        return db.listAllUsers().then(function(result) {
            expect(result.length).toBeGreaterThan(0);
        });
    });

    it("Test getUser() method.", async function() {
        let result = await db.getUser(1);
        expect(result.length).toBeGreaterThan(0);
    });
});