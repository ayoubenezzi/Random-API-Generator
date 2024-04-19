const displayJoke = document.getElementById("display-joke");
const button = document.querySelector("#getJoke");

button.addEventListener("click", getRandomeJoke);

function getRandomeJoke() {
  const ajax = new XMLHttpRequest();
  const url = "https://api.chucknorris.io/jokes/random";
  ajax.open("GET", url, true);
  ajax.onreadystatechange = () => {
    if (ajax.status === 200 && ajax.readyState === 4) {
      let data = JSON.parse(ajax.responseText);
      displayJoke.innerHTML = `${data.value}`;
    } else {
      ajax.onerror = onerror();
    }
  };
  ajax.send();
}

function onerror() {
  displayJoke.textContent = "There is an Error";
}
