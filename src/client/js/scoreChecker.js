function scoreValue(score) {
  switch (score) {
    case "P+":
      return "Strongly positive";
    case "P":
      return "Positive";

    case "N":
      return "Negative";
    case "N+":
      return "Strongly negative";
    case "NEU":
      return "Neutral";
    case "NONE":
      return "Without sentiment";
    default:
      return "No data";
  }
}

export { scoreValue };
