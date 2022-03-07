const request = require("supertest");
const server = require("./server.js");
const db = require("./data/db-config");
const Item = require("./items/items-model");

const item1 = {
  item_name: "item1",
  source: "friend2",
  ingredients: "ing1",
  instructions: "inst1",
  category: "cat1",
  user_id: 1,
};

const item2 = {
  item_name: "item2",
  source: "friend2",
  ingredients: "ing2",
  instructions: "inst2",
  category: "cat2",
  user_id: 1,
};

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

afterAll(async () => {
  await db.destroy();
});

describe("Basic Tests", () => {



it("sanity check", () => {
  expect(true).not.toBe(false);
});

  it("On the correct Testing env node", async () => {
    expect(process.env.NODE_ENV).toBe("testing");
  });
})

describe("End Point Tests", () => {
  test("Returns 200", async () => {
    const res = await request(server)
      .post("/api/auth/register")
      .send({ username: "Akhil", password: "1234" });
    expect(res.status).toBe(201);
    expect(res.body.message).toBe("Hi, Akhil");
  });
  test("Login returns 200", async () => {
    const res = await request(server)
      .post("/api/auth/login")
      .send({ username: "Akhil", password: "1234" });
    expect(res.status).toBe(200);
  });
  test("Get items", async () => {
    const res = await request(server)
    .post("/api/auth/login")
    .send({ username: "Akhil", password: "1234" });


    const token = res.body.token;

    const res2 = await request(server)
    .get("/api/items")
    .set('Authorization', token)
    expect(res2.status).toBe(200);
  })
});

