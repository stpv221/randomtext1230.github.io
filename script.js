const test = document.getElementById("url");

test.textContent += window.location.href;

if (window.location.href === "https://odin.is-probably.gay") {
  window.location.replace("https://stackoverflow.com");
}
