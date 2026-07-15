const db = require('../../src/db/sqlitedb.mts');

describe("Sqlite test suite", function() {
    it("Test listAllUsers method.", async () => {
        return db.getAllUsers().then(result => {
            expect(result.length).toBeGreaterThan(0);
        }).catch(err => fail(err));
    });

    it("Test getUser method.", async () => {
        let result = await db.getUser(1);
        expect(result.length).toBeGreaterThan(0);
    });

    it("Test getAllProducts method.", async () => {
        let result = await db.getAllProducts();
        expect(result.length).toBeGreaterThan(0);
    });

    it("Test getProduct method.", async () => {
        let result = await db.getProduct(1);
        expect(result.length).toBeGreaterThan(0);
    })
});