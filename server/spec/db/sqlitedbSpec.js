import { UserData, ProductData } from '../../src/db/sqlitedb.mts';

const userData = new UserData();
const productData = new ProductData();

describe("Sqlite test suite", function() {
    it("Test listAllUsers method.", async () => {
        return userData.getAllUsers().then(result => {
            expect(result.length).toBeGreaterThan(0);
        }).catch(err => fail(err));
    });

    it("Test getUser method.", async () => {
        let result = await userData.getUser(1);
        expect(result.length).toBeGreaterThan(0);
    });

    it("Test getAllProducts method.", async () => {
        let result = await productData.getAllProducts();
        expect(result.length).toBeGreaterThan(0);
    });

    it("Test getProduct method.", async () => {
        let result = await productData.getProduct(1);
        expect(result.length).toBeGreaterThan(0);
    })
});