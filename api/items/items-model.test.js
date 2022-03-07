const Items = require("./items-model");
const db = require("../data/db-config");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});
beforeEach(async () => {
  await db.seed.run();
});
afterAll(async () => {
  await db.destroy();
});
describe("Basic Tests,", () => {
  it("sanity check", () => {
    expect(true).not.toBe(false);
  });

  test("NODE_ENV is correct", () => {
    expect(process.env.NODE_ENV).toBe("testing");
  });
});

describe("Items Model Test", () => {
  describe("items.find()", () => {
    let items;
    beforeEach(async () => {
      items = await Items.find();
    });
    test("Returns All Items", () => {
      expect(items).toHaveLength(2);
    });
    test("Items have correct info from seed", () => {
      expect(items[0]).toMatchObject({
        title: "Sandwich",
        source: "Dad",
        ingredients: "Buns, meat, cheese",
        instructions: "Put meat and cheese in the buns.",
        category: "American",
        user_id: 1,
      });
    });
  });
});
