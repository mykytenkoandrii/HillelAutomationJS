const axios = require("axios");
const jsonData = require("./env.json");
const { faker } = require("@faker-js/faker");
const fs = require("fs");
jest.mock("axios");

describe("Homework 14 test 3", () => {

    test("Task 3 - Mocking data and positive response checking", async () => {
      const positiveData = {
        data: {
          title: "mocked title",
          body: "mocked body",
          userId: 1,
        },
        status: 201,
        statusText: "Created",
      };

      axios.post.mockResolvedValue(positiveData);

      const response = await axios.post("https://mockedsite.com/post", {
        title: "mocked title",
        body: "mocked body",
        userId: 1,
      });

      expect(axios.post).toHaveBeenCalledWith("https://mockedsite.com/post", {
        title: "mocked title",
        body: "mocked body",
        userId: 1,
      });

      expect(response).toEqual(positiveData);
      expect(response.status).toBe(201);
    });

    test("Task 3 - Mocking data and negative response checking", async () => {
      const negativeData = {
        data: {
          title: "mocked title",
          body: "mocked body",
        },
        status: 404,
        statusText: "Not Found",
      };

      axios.get.mockResolvedValue(negativeData);

      const response = await axios.get("https://mockedsite.com/post", {
        title: "mocked title",
        body: "mocked body",
      });

      expect(axios.get).toHaveBeenCalledWith("https://mockedsite.com/post", {
      title: "mocked title",
      body: "mocked body",
      });

      expect(response).toEqual(negativeData);
      expect(response.status).toBe(404);
      expect(response.statusText).toBe('Not Found');
    });
});
