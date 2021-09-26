// Import js file
import { validateUrl } from "../src/client/js/urlChecker";

describe("Testing the submit functionality", () => {
  test("Testing the checkForURL() function", () => {
    expect(validateUrl).toBeDefined();
  });
});
describe('Test, the function "validateUrl()" should be a function' , () => {
  test('It should be a function', () => {
      expect(typeof validateUrl).toBe("function");
  });
});
