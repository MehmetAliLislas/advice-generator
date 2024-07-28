const url = "https://api.adviceslip.com/advice";

const newAdvice = () => {
  setTimeout(() => {
    getAdvice();
  }, 1000);
};

const getAdvice = () => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => getAdvice(json))
    .catch((err) => console.log(err));

  const getAdvice = (json) => {
    let adviceID = json.slip.id;
    let adviceData = json.slip.advice;
    let adviceNumber = document.querySelector(".advice-number");
    adviceNumber.innerHTML = `ADVICE #${adviceID}`;
    let advice = document.querySelector(".advice");
    advice.innerHTML = `"${adviceData}"`;
  };
};

getAdvice();
