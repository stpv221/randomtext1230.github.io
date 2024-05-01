const test = document.getElementById("url");

test.innerHTML = window.location.href;

if (window.location.href === "https://odin.is-probably.gay") {
  window.location.replace("https://stackoverflow.com");
}
