const request = require("supertest");
const { user1, user2, invalidUser } = require('./mockData.js')
describe("GET / ", () => {
    test("It shoud get all data", async () => {
        const response = await request('http://127.0.0.1:8000').get("/data");
        expect(response.statusCode).toBe(200);
    });
});

describe("/post data ", () => {
    test("It should post data if data is valid", async () => {
        const response = await request('http://127.0.0.1:8000').post("/").send(user2);
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expect.any(Array))
        expect(response.body[0]).toEqual(expect.any(Object))
        expect(response.body[0]).toHaveProperty('email')
        expect(response.body[0]).toHaveProperty('firstName')
        expect(response.body[0]).toHaveProperty('lastName')
    });
    test("It should not post data if data is invalid", async () => {
        const response = await request('http://127.0.0.1:8000').post("/").send(invalidUser);
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('Cannot save because invalid input data!')

    });
});

describe("/put", () => {
    test("it should update data of user having valid id", async () => {
        const response = await request('http://127.0.0.1:8000').put("/update/0").send(user1);
        expect(response.statusCode).toBe(200);
        expect(response.body.customer[0]).toHaveProperty('email')
        expect(response.body.customer[0]).toHaveProperty('firstName')
        expect(response.body.customer[0]).toHaveProperty('lastName')
        expect(response.body.message).toBe('Update successful!')

    });
    test("it should return an error message if user has invalid id", async () => {
        const response = await request('http://127.0.0.1:8000').put("/update/30").send(user1);
        expect(response.statusCode).toBe(200)
        expect(response.body.message).toBe('User is not exist!')

    });
    test("it should return an error message if data is invalid", async () => {
        const response = await request('http://127.0.0.1:8000').put("/update/0").send(invalidUser);
        expect(response.statusCode).toBe(200)
        expect(response.body.message).toBe('Invalid data!')

    });
});

describe("/delete", () => {
    test("it should delete user have id 0", async () => {
        const response = await request('http://127.0.0.1:8000').delete("/delete/0");
        expect(response.statusCode).toBe(200);

    });

});

