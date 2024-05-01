const test = document.getElementById("url");

test.innerHTML = window.URL;

if (window.URL === "https://odin.is-probably.gay") {
  window.location.replace("https://stackoverflow.com");
}
