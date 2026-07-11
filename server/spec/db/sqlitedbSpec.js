const db = require('../../src/db/sqlitedb.mts');

describe("Sqlite test suite", function() {
    it("Test listAllUsers method.", async function() {
        return db.listAllUsers().then(function(result) {
            expect(result).toBeGreaterThan(0);
        });
    });

    it("Test getUser method.", async () => {
        let result = await db.getUser(1);
        expect(result).toBeGreaterThan(0);
    });
});