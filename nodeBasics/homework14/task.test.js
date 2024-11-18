const axios = require("axios");
const jsonData = require("./env.json");
const { faker } = require("@faker-js/faker");
const fs = require("fs");

describe("Homework 14 tests", () => {
  test("Task 1 - Check response error 404 message", async () => {
    await expect(axios.get("https://vashdomen.com/404.html")).rejects.toThrow(
      "Request failed with status code 404"
    );
  });

  test("Task 1 - Check response status 404", async () => {
    await expect(
        axios.get("https://vashdomen.com/404.html")).rejects.toMatchObject({
        response: {
          status: 404,
        },
      });
  });

  test("Task 2 - Check added headers", async () => {
    let title = faker.lorem.sentence();
    let bodyData = faker.lorem.paragraph();

    const response = await axios.post(
      `${jsonData.baseUrl}/posts`,
      {
        title: title,
        body: bodyData,
        userId: 23,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    expect(response.data.title).toBe(title);
    expect(response.data.body).toBe(bodyData);
    expect(response.data.userId).toBe(23);
    expect(response.statusText).toEqual("Created");
  });
});
