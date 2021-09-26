//Post
const post = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

function handleSubmit(event) {
  event.preventDefault();

  let formText = document.getElementById("userInput").value;
  if (Client.validateUrl(formText)) {
    console.log("::Input Submitted::");

    post("http://localhost:8081/home", { url: formText }).then((res) =>
      showResult(res)
    );
  } else {
    alert("invalid URL!");
  }
}

const showResult = (response) => {
  console.log("Recieved info:", response);
  const score = Client.scoreValue(response.score_tag);
  document.getElementById("score").innerHTML = `Score: ${score}`;
  document.getElementById(
    "text"
  ).innerHTML = `Text: ${response.sentence_list[0].text}`;
  document.getElementById(
    "agreement"
  ).innerHTML = `Agreement: ${response.agreement}`;
  document.getElementById(
    "subjectivity"
  ).innerHTML = `Subjectivity: ${response.subjectivity}`;
  document.getElementById(
    "confidence"
  ).innerHTML = `Confidence: ${response.confidence}`;
  document.getElementById("irony").innerHTML = `Irony: ${response.irony}`;
};

export { handleSubmit, showResult };
