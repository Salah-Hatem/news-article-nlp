import "babel-polyfill";
// Import js file
import { scoreValue } from "../src/client/js/scoreChecker";

describe("Testing polarity translation functionality", () => {
  test("Testing the scoreValue() function", () => {
    expect(scoreValue("P+")).toBe("Strongly positive");
  });

  test("Testing the scoreValue() function", () => {
    expect(scoreValue("P")).toBe("Positive");
  });

  test("Testing the scoreValue() function", () => {
    expect(scoreValue("NEU")).toBe("Neutral");
  });

  test("Testing the scoreValue() function", () => {
    expect(scoreValue("N")).toBe("Negative");
  });

  test("Testing the scoreValue() function", () => {
    expect(scoreValue("N+")).toBe("Strongly negative");
  });

  test("Testing the scoreValue() function", () => {
    expect(scoreValue("NONE")).toBe("Without sentiment");
  });

  test("Testing the scoreValue() function", () => {
    expect(scoreValue).toBeDefined();
  });
});
